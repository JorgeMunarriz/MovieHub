import { GetTokenFunction  } from "../types/moviehub.types";



 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 export const postApi = async (url: string, data: any, getToken: GetTokenFunction ) => {
  const token = await getToken();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log(response);
    } else {
      throw new Error("No response at server");
    }
  } catch (error) {
    console.log(error);
  }
};
