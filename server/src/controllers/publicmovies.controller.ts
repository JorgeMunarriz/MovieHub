import { Request, Response } from "express";
import { uploadImage } from "../utils/cloudinary";
import fs from "fs-extra";
import { prismaClient } from "../db/prismaClient";
import { convertToType } from '../utils/convertToType';


export const createPublicMovie = async (req: Request, res: Response): Promise<Response> => {
  let { title, year, score, country, genres } = req.body;


  if (typeof title !== "string") title = title.toString();
  if (typeof year !== "number") year = Number(year);
  if (typeof score !== "number") score = Number(score);
  if (typeof country !== "string") country = country.toString();
  if (!Array.isArray(genres)) genres = [genres];

  try {
    const genreIDs: string[] = [];

    for (const genreName of genres) {
      let genre = await prismaClient.genres.findUnique({ where: { genre: genreName } });

      if (!genre) {
        genre = await prismaClient.genres.create({ data: { genre: genreName } });
      }
      genreIDs.push(genre.id);
    }
    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: "Image is missing" });
    }

    if ((req.files as any)?.image) {
      const upload = await uploadImage((req.files as any).image.tempFilePath);
      await fs.unlink((req.files as any).image.tempFilePath);

      const newMovie = await prismaClient.publicmovies.create({
        data: {
          title,
          year,
          score,
          country,
          // Connect genres using IDs
          genres: {
            connect: genreIDs.map((genreID: string) => ({ id: genreID })),
          },
          imageUrl: upload.secure_url,
          imageId: upload.public_id,
          // Store genres as an array of names
          genresArray: genres,
        },
        include: {
          genres: true
        },
      });

      return res.status(201).send({ status: "Success", message: "Movie created", newMovie });
    }
    return res.status(404).send("File not found");
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getPublicMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  try {
    const movie = await prismaClient.publicmovies.findUnique({
      where: { id: convertToType(movieID) },
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

export const getPublicAllMovies = async (req: Request, res: Response): Promise<Response> => {
  try {
    const movies = await prismaClient.publicmovies.findMany({
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
  genre: string
}

export const updatePublicMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  let { title, score, year, country, genres } = req.body;

  if (typeof title !== "string") title = title.toString();
  if (typeof year !== "number") year = Number(year);
  if (typeof score !== "number") score = Number(score);
  if (typeof country !== "string") country = country.toString();
  if (typeof genres === "string") {
    genres = genres.split(',').map((genre: string) => genre.trim());
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

    let imageUrl = "";
    if (req.files && req.files.image) {
      // Upload the new image
      const upload = await uploadImage((req.files as any).image.tempFilePath);
      await fs.unlink((req.files as any).image.tempFilePath);

      imageUrl = upload.secure_url;
    }

    const movie = await prismaClient.publicmovies.findUnique({ where: { id: convertToType(movieID) }, include: { genres: true } });

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
      genres: { connect: genreIDs.map((genreID: string) => ({ id: convertToType(genreID) })) },
    };

    if (imageUrl) {
      movieUpdateData.imageUrl = imageUrl;
    }

    const movieUpdate = await prismaClient.publicmovies.update({
      where: { id: convertToType(movieID) },
      data: movieUpdateData,
      include: {
        genres: true,
      },
    });

    //Find all genresArray
    const updatedGenresArray = (movieUpdate.genres as Genre[]).map((genre) => genre.genre);

    // Apdate genresArray
    await prismaClient.publicmovies.update({
      where: { id:  convertToType(movieID)  },
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

export const deletePublicMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;

  try {
    const movie = await prismaClient.publicmovies.findUnique({
      where: { id: convertToType(movieID) }
    });

    if (!movie) {
      return res.status(404).send({ status: "Error", msg: "Movie not found" });
    }

    // Delete the movie
    await prismaClient.publicmovies.delete({
      where: { id: convertToType(movieID) },
    });

    return res.status(200).send({ status: "Success", msg: "Deleted movie by ID" });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
