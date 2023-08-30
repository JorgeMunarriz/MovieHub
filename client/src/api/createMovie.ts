export const createMovie = async (url: string, data: any, getToken: any) => {
  const token = await getToken();
  const formData = new FormData();
  formData.append("title", data.Name);
  formData.append("year", data.Year);
  formData.append("score", data.Score);
  formData.append("country", data.Country);
  formData.append("genres", data.Genres)
  formData.append("image", data.Image[0]);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { 
        authorization: `Bearer ${token}` 
      },
      body: formData,
    });
    console.log("funcionando");
    if (response.ok) {
      console.log(response);
    } else {
      throw new Error("No response at server");
    }
  } catch (error) {
    console.log(error);
  }
};
