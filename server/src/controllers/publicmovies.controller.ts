import { Request, Response } from "express";
import prisma from "../db/prismaClient";
import { uploadImage } from "../utils/cloudinary";
import fs from "fs-extra";


export const createPublicMovie = async (req: Request, res: Response): Promise<Response> => {
  let { title, year, score, country, genres } = req.body;

  const { userID } = req.params;

  if (typeof title !== "string") title = title.toString();
  if (typeof year !== "number") year = Number(year);
  if (typeof score !== "number") score = Number(score);
  if (typeof country !== "string") country = country.toString();
  if (!Array.isArray(genres)) genres = [genres];

  try {
    const genreIDs: string[] = [];

    for (const genreName of genres) {
      let genre = await prisma.genres.findUnique({ where: { genre: genreName } });

      if (!genre) {
        genre = await prisma.genres.create({ data: { genre: genreName } });
      }
      genreIDs.push(genre.id);
    }
    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: "Image is missing" });
    }

    if ((req.files as any)?.image) {
      const upload = await uploadImage((req.files as any).image.tempFilePath);
      await fs.unlink((req.files as any).image.tempFilePath);

      const newMovie = await prisma.publicmovies.create({
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
    const movie = await prisma.publicmovies.findUnique({
      where: { id: movieID },
      include: { genres: true },
    });

    if (!movie) {
      return res.status(404).send({ msg: "Movie not found" });
    }
    //Fetch the genres using genreIds
    // const genreIds = movie.genres
    // const genres = await GenresModel.find({_id: { $in: genreIds }}, {_id: 1, genre: 1  })
    // movie.genres = genres

    return res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const getPublicAllMovies = async (req: Request, res: Response): Promise<Response> => {
  try {
    const movies = await prisma.publicmovies.findMany({
      include: {
        genres: true,
      },
    });

    // const moviesWithGenres = await Promise.all(
    //   movies.map(async (movie) => {
    //     const genreIds = movie.genres;
    //     const genres = await GenresModel.find({ _id: { $in: genreIds } }, { _id: 1, genre: 1 });
    //     movie.genres = genres;
    //     return movie.toObject();
    //   })
    // );

    return res.status(200).send(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updatePublicMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  const { title, score, year, genres } = req.body;
  try {
    const movie = await prisma.publicmovies.update({
      where: { id: movieID },
      data: { title, score, year, genres },
    });

    return res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const deletePublicMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;

  try {
    const movie = await prisma.publicmovies.findUnique({
      where: { id: movieID }
    });

    if (!movie) {
      return res.status(404).send({ status: "Error", msg: "Movie not found" });
    }

    // Delete the movie
    await prisma.publicmovies.delete({
      where: { id: movieID },
    });

    return res.status(200).send({ status: "Success", msg: "Deleted movie by ID" });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
