import { Request, Response } from "express";
import prisma from "../db/prismaClient";
import { uploadImage } from "../utils/cloudinary";
import fs from "fs-extra";

export const createMovie = async (req: Request, res: Response): Promise<Response> => {
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

      const newMovie = await prisma.movies.create({
        data: {
          title,
          year,
          score,
          country,
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
      await prisma.users.update({
        where: { email: userID },
        data: {
          moviesArray: { push: newMovie.title },
        },
      });

      return res.status(201).send({ status: "Success", message: "Movie created", newMovie });
    }
    return res.status(404).send("File not found");
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  try {
    const movie = await prisma.movies.findUnique({
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

export const getAllMovies = async (req: Request, res: Response): Promise<Response> => {
  try {
    const movies = await prisma.movies.findMany({
      include: {
        genres: true,
      },
    });

    return res.status(200).send(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  const { title, score, year, country, genres } = req.body;
  try {
    const movie = await prisma.movies.update({
      where: { id: movieID },
      data: { title, score, year, country, genres },
    });

    return res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const deleteMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;

  try {
    const movie = await prisma.movies.findUnique({
      where: { id: movieID },
      include: {
        users: true,
      },
    });

    if (!movie) {
      return res.status(404).send({ status: "Error", msg: "Movie not found" });
    }

    const userID = movie.users?.id;

    if (userID) {
      // Remove the movie's title from the user's moviesArray
      await prisma.users.update({
        where: { id: userID },
        data: {
          moviesArray: { set: movie.users?.moviesArray.filter((title: string) => title !== movie.title) },
        },
      });
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
// export const deleteAllMovies = async (req: Request, res: Response): Promise<Response> => {
//   const { movieID } = req.params;

//   try {
//     const movie = await prisma.movies.findMany({
//       include: {
//         users: true,
//       },
//     });

//     const userID = users.

//     if (userID) {
//       // Remove the movie's title from the user's moviesArray
//       await prisma.users.update({
//         where: { id: userID },
//         data: {
//           moviesArray: { set: movie.users?.moviesArray.filter((title: string) => title !== movie.title) },
//         },
//       });
//     }

//     // Delete the movie
//     await prisma.movies.deleteMany({

//     });

//     return res.status(200).send({ status: "Success", msg: "Deleted movies" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send(error);
//   }
// };
