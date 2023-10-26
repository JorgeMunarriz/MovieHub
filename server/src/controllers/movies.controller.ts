import { Request, Response } from "express";
import { prismaClient } from "../db/prismaClient";
import { uploadImage, deleteImage } from "../utils/cloudinary";
import fs from "fs-extra";
// import { convertToType } from "../utils/convertToType";

export const createMovie = async (req: Request, res: Response): Promise<Response> => {
  let { title, year, score, country, genres, description, image } = req.body;

  const { userID } = req.params;
  

  if (typeof title !== "string") title = title.toString();
  if (typeof year !== "number") year = Number(year);
  if (typeof score !== "number") score = Number(score);
  if (typeof country !== "string") country = country.toString();

  if (typeof genres === "string") {
    genres = genres.split(",").map((genre: string) => genre.trim());
  }

  try {
    const genreIDs: string[] = [];

    for (const genreName of genres) {
      let genre = await prismaClient.genres.findUnique({ where: { genre: genreName } });

      if (!genre) {
        genre = await prismaClient.genres.create({ data: { genre: genreName } });
      }
      genreIDs.push(genre.id);
    }
    if (!image) {
      return res.status(400).json({ error: "Image is missing" });
    }

    if (image) {
      const upload = await uploadImage(image);
      // await fs.unlink((req.files as any).image.tempFilePath);

      const newMovie = await prismaClient.movies.create({
        data: {
          title,
          year,
          score,
          country,
          description,
          isLiked: false,
          // Connect genres using IDs
          genres: {
            connect: genreIDs.map((genreID: string) => ({ id: genreID })),
          },
          users: {
            connect: {
              email: userID,
            },
          },
          imageUrl: upload.secure_url,
          imageId: upload.public_id,
          // Store genres as an array of names
          genresArray: genres,
        },
        include: {
          genres: true,
          users: true,
        },
      });
      await prismaClient.users.update({
        where: { email: userID },
        data: {
          moviesArray: { push: newMovie.title },
        },
      });

      return res.status(201).send({ status: "Success", message: "Movie created", newMovie });
    }
    console.log(res);

    return res.status(404).send("File not found");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const getMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  try {
    const movie = await prismaClient.movies.findUnique({
      where: { id: movieID },
      include: { genres: true },
    });

    if (!movie) {
      return res.status(404).send({ msg: "Movie not found" });
    }

    return res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const getAllMovies = async (req: Request, res: Response): Promise<Response> => {
  try {
    const movies = await prismaClient.movies.findMany({
      include: {
        genres: true,
      },
    });

    return res.status(200).send(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
};
export const getAllMoviesByUser = async (req: Request, res: Response): Promise<Response> => {
  const { userEmail } = req.params;

  try {
    const movies = await prismaClient.users
      .findUnique({
        where: {
          email: userEmail,
        },
      })
      .movies({
        include: {
          genres: true,
        },
      });

    return res.status(200).send(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
};
interface Genre {
  genre: string;
}

export const updateMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  let { title, score, year, country, genres, description, image } = req.body;

  if (typeof title !== "string") title = title.toString();
  if (typeof year !== "number") year = Number(year);
  if (typeof score !== "number") score = Number(score);
  if (typeof country !== "string") country = country.toString();
  // if (typeof description !== "string") description = description.toString();

  if (typeof genres === "string") {
    genres = genres.split(",").map((genre: string) => genre.trim());
  }

  try {
    const genreIDs: string[] = [];

    for (const genreName of genres) {
      let genre = await prismaClient.genres.findUnique({ where: { genre: genreName } });

      if (!genre) {
        genre = await prismaClient.genres.create({ data: { genre: genreName } });
      }
      genreIDs.push(genre.id);
    }


    let imageId;
    let imageUrl;
    
    if (image){
      const upload = await uploadImage(image);
      // await fs.unlink((req.files as any).image.tempFilePath);
      imageId = upload.public_id;
      imageUrl = upload.secure_url;
      
    }

    const movie = await prismaClient.movies.findUnique({ where: { id: movieID }, include: { genres: true } });

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    // Find the names of the current genres
    const currentGenres = movie.genres || [];

    // Encuentra los nombres de los géneros actuales
    const currentGenresArray: string[] = currentGenres.map((genre: { genre: string }) => genre.genre);
    const genresToRemove: string[] = currentGenresArray.filter((genre: string) => !genres.includes(genre));

    // Remove genres that are no longer in the movie

    for (const genreNameToRemove of genresToRemove) {
      await prismaClient.genres.deleteMany({
        where: {
          genre: genreNameToRemove,
        },
      });
    }

    const movieUpdateData: Record<string, any> = {
      title,
      score,
      year,
      country,
      description,
      genres: { connect: genreIDs.map((genreID: string) => ({ id: genreID })) },
      imageId: imageId,
      imageUrl: imageUrl
    };


    const movieUpdate = await prismaClient.movies.update({
      where: { id: movieID },
      data: movieUpdateData,
      include: {
        genres: true,
      },
    });

    //Find all genresArray
    const updatedGenresArray = (movieUpdate.genres as Genre[]).map((genre) => genre.genre);

    // Apdate genresArray
    await prismaClient.movies.update({
      where: { id: movieID },
      data: {
        genresArray: updatedGenresArray,
      },
    });

    return res.status(200).send(movieUpdate);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const deleteMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;

  try {
    //Find Movie by id
    const movie = await prismaClient.movies.findUnique({
      where: { id: movieID },
      include: {
        users: true,
      },
    });

    if (!movie) {
      return res.status(404).send({ status: "Error", msg: "Movie not found" });
    }
    if (movie.imageId) {
      await deleteImage(movie.imageId);
    }

    const userID = movie.users?.id;

    if (userID) {
      // Remove the movie's title from the user's moviesArray
      await prismaClient.users.update({
        where: { id: userID },
        data: {
          moviesArray: { set: movie.users?.moviesArray.filter((title: string) => title !== movie.title) },
        },
      });
    }

    // Delete the movie
    await prismaClient.movies.delete({
      where: { id: movieID },
    });

    return res.status(200).send({ status: "Success", msg: "Deleted movie by ID" });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const updateMovieLikedStatus = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  const { isLiked } = req.body;

  try {
    // update liked state
    await prismaClient.movies.update({
      where: { id: movieID },
      data: {
        isLiked,
      },
    });

    return res.status(200).json({ status: "Success", message: "Movie liked status updated" });
  } catch (error) {
    console.error("Error updating like status on movie:", error);
    return res.status(500).json({ status: "Error", message: "Internal Server Error" });
  }
};
