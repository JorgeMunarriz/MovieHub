import { Request, Response } from "express";
import prisma from "../db/prismaClient";
import { uploadImage } from "../utils/cloudinary";

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
      let genre = await prisma.genres.findUnique({ where: { genre: genreName } });

      if (!genre) {
        genre = await prisma.genres.create({ data: { genre: genreName } });
      }

      genreIDs.push(genre.id);
    }
    const imageVerification = req.files?.image;
    console.log(imageVerification);
    if (imageVerification) {
      //const imageUploaded = await uploadImage(imageVerification.tempFilePath)
    }

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
        // Store genres as an array of names
        genresArray: genres,
      },
      include: {
        genres: true,
      },
    });
    

    return res.status(201).send({ status: "Success", message: "Movie created", newMovie });
  } catch (error) {
    return res.status(501).send(error);
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
    await prisma.movies.delete({
      where: { id: movieID },
    });

    return res.status(200).send({ status: "Success", msg: "Deleted movie by ID" });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
