import { GetTokenFunction, MovieFormData } from "../types/moviehub.types";

export const createMovie = async (url: string, data: MovieFormData, getToken: GetTokenFunction) => {
  const token = await getToken();
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("year", data.year.toString());
  formData.append("score", data.score.toString());
  formData.append("country", data.country);
  if (Array.isArray(data.genres)) {
    for (const genre of data.genres) {
      formData.append("genres", genre);
    }
  }

  if (data.image) {
    formData.append("image", data.image[0]);
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    console.log("formdata", formData);
    if (response.ok) {
      console.log(response);
    } else {
      throw new Error("No response from the server");
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = async (url: string, data: MovieFormData, getToken: GetTokenFunction) => {
  const token = await getToken();
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("year", data.year.toString());
  formData.append("score", data.score.toString());
  formData.append("country", data.country);
  if (Array.isArray(data.genres)) {
    for (const genre of data.genres) {
      formData.append("genres", genre);
    }
  }
  if (data.image) {
    formData.append("image", data.image[0]);
  }

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (response.ok) {
      console.log(response);
    } else {
      throw new Error("No response from the server");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (url: string, getToken: GetTokenFunction) => {
  const token = await getToken();

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
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
export const getMovieById = async (url: string, getToken: GetTokenFunction) => {
  const token = await getToken();

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const movieData = response.json();
      console.log(movieData);
      return movieData;
    } else {
      throw new Error("No response at server");
    }
  } catch (error) {
    console.log(error);
  }
};
