import toast from "react-hot-toast";
import { GetTokenFunction, MovieFormData, MoviesType } from "../types/moviehub.types";
import { readData } from "../utils/readData";

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const imageData: any = await readData(data.image[0]);
    formData.append("image", imageData);
  }
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    });
   

    if (response.ok) {
      toast.success('Successfully created!');
    }
    if (!response.ok) {
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
  formData.append("description", data.description);
  if (Array.isArray(data.genres)) {
    for (const genre of data.genres) {
      formData.append("genres", genre);
    }
  }
  if (data.image) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const imageData: any = await readData(data.image[0]);
    formData.append("image", imageData);
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
      toast.success('Successfully updated!');
    }
    if (!response.ok) {
      toast.error('No response from the server');
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
    if (response.ok) {
      toast.success('Successfully deleted!');
    }
    if (!response.ok) {
      toast.error('No response from the server');
      throw new Error("No response from the server");
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
    if (!response.ok) {
      throw new Error("No response from the server");
    }

    const movie = (await response.json()) as MoviesType;
    return movie;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateMovieLikedStatus = async (url: string, movieID: string, isLiked: boolean, getToken: GetTokenFunction) => {
  const token = await getToken();

  try {
    const response = await fetch(`${url}/like/${movieID}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isLiked }), // Send Liked status
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error("No response from the server");
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
