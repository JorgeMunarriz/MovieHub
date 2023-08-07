import { Request, Response } from "express";
import { GenresModel, MoviesModel, UserModel } from "../model";
import prisma from "../db/prismaClient";
import { updateUserByID } from './user.controller';

export const createMovie = async (req: Request, res: Response): Promise<Response> => {
  const { name, year, score, genres } = req.body;
  const { userID } = req.params;
  try {
    const newMovie = await prisma.movies.create({
      data: { name, year, score, genres,
        users: {
          connect: {
            id: userID
          }
        }
      }
    })
      
      // { genre: { $in: genres.map((genres: { genre: any; }) => genres.genre)}})
    // Extract the genre ids from the found genres


    // const genreNames = foundGenres.map((genre) => genre);
    
    // const newMovie = await MoviesModel.create({ name, year, score, genres: genreNames });

    // await UserModel.findByIdAndUpdate(
    //    userID,
    //   {
    //     $push: { movies:{_id: newMovie._id, name: newMovie.name, genres: newMovie.genres}}
    //   }
    // );

   return res.status(201).send(newMovie);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;  
  try {
    const movie = await prisma.movies.findUnique({
      where: {id: movieID},
      include: {genres: true}
    })
    
    if (!movie){
      return res.status(404).send({msg: "Movie not found"});
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
      select: {
        id: true,
        name: true,
        score: true,
        year: true,
        genres: true
      }
    })

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


export const updateMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  const { name, score, year, genres } = req.body;
  try {

    const movie = await prisma.movies.update({
      where: {id: movieID},
      data: {name, score, year, genres},
      
    })
    await prisma.users.update({
      where: {id: movieID},
      data: {name}
    })
    
    // MoviesModel.findByIdAndUpdate(movieID,{ $set: { name, score, year, genres }, }, { new: true })
    // await UserModel.findByIdAndUpdate(
    //   movieID,
    //   {
    //     $set: { name, score, year, genres },
    //   },
    //   { new: true }
    // );
    return res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
export const deleteMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  
  try {
    await prisma.users.delete({
      where: {id: movieID}
    })
    await prisma.movies.delete({
      where: {id: movieID}
    })
    return res.status(200).send({msg: "Deleted movie by ID"});
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
