import { Request, Response } from "express";
import { prismaClient } from "../db/prismaClient";
import { uploadImage, deleteImage } from "../utils/cloudinary";
import fs from "fs-extra";
import { convertToType } from "../utils/convertToType";

export const createMovie = async (req: Request, res: Response): Promise<Response> => {
  let { title, year, score, country, genres } = req.body;

  const { userID } = req.params;

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
    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: "Image is missing" });
    }

    if ((req.files as any)?.image) {
      const upload = await uploadImage((req.files as any).image.tempFilePath);
      await fs.unlink((req.files as any).image.tempFilePath);

      const newMovie = await prismaClient.movies.create({
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
      await prismaClient.users.update({
        where: { email: userID },
        data: {
          moviesArray: { push: newMovie.title },
        },
      });
      

      return res.status(201).send({ status: "Success", message: "Movie created", newMovie });
    }
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
      where: { id:convertToType(movieID)  },
      include: { genres: true },
    })

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
interface Genre {
  genre: string
}

export const updateMovieByID = async (req: Request, res: Response): Promise<Response> => {
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
      // Subir una nueva imagen
      const upload = await uploadImage((req.files as any).image.tempFilePath);
      await fs.unlink((req.files as any).image.tempFilePath);

      imageUrl = upload.secure_url;
    }

    const movie = await prismaClient.movies.findUnique({ where: { id: movieID }, include: { genres: true } });

    if (!movie) {
      return res.status(404).json({ error: "Película no encontrada" });
    }

    // Encuentra los géneros actuales en la película
    const currentGenres = movie.genres || [];

    // Encuentra los nombres de los géneros actuales
    const currentGenresArray: string[] = currentGenres.map((genre: { genre: string }) => genre.genre);
    const genresToRemove: string[] = currentGenresArray.filter((genre: string) => !genres.includes(genre));
    

    // Elimina los géneros que ya no están en la película
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
      genres: { connect: genreIDs.map((genreID: string) => ({ id: genreID })) },
    };

    if (imageUrl) {
      movieUpdateData.imageUrl = imageUrl;
    }

    const movieUpdate = await prismaClient.movies.update({
      where: { id: convertToType(movieID) },
      data: movieUpdateData,
      include: {
        genres: true,
      },
    });

    // Obtén los nombres de los géneros actualizados
    const updatedGenresArray = (movieUpdate.genres as Genre[]).map((genre) => genre.genre);

    // Actualiza genresArray
    await prismaClient.movies.update({
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



export const deleteMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;

  try {
    const movie = await prismaClient.movies.findUnique({
      where: { id:  convertToType(movieID)  },
      include: {
        users: true,
      },
    });

    if (!movie) {
      return res.status(404).send({ status: "Error", msg: "Movie not found" });
    }else {      
        await deleteImage(movie.imageId)
      
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
