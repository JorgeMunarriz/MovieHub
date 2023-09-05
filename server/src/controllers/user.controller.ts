import { Request, Response } from "express";
import  { prismaClient } from "../db/prismaClient";
import { convertToType } from '../utils/convertToType';
 "../db/prismaClient";

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, moviesArray } = req.body;

  try {
    if (!name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }    
    // Check if a user with the given email already exists
    const existingUser = await prismaClient.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json("User with this email already exists" );
    }
    const newUser = await prismaClient.users.create({
      data: { name, email, moviesArray },
    });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allUsers = await prismaClient.users.findMany({
      include: {
        movies: {
          include: {
            genres: true,
          },
        },
      },
    });

    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getUserByID = async (req: Request, res: Response): Promise<Response> => {
  const { userID } = req.params;
  try {
    const userById = await prismaClient.users.findUnique({
      where: { email: userID },
      include: {
        movies: {
          include: {
            genres: true,
          },
        },
      },
    });

    return res.status(200).json(userById);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateUserByID = async (req: Request, res: Response): Promise<Response> => {
  const { userID } = req.params;
  const { name, email } = req.body;
  try {
    const userById = await prismaClient.users.update({
      where: { id: convertToType(userID) },
      data: { name, email },
    });

    return res.status(200).json(userById);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteUserByID = async (req: Request, res: Response): Promise<Response> => {
  const { userID } = req.params;
  try {
    const user = await prismaClient.users.findUnique({
      where: { id: convertToType(userID) },
      include: {
        movies: {
          include: {
            genres: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ status: "Error", msg: "User not found" });
    }

    // Delete each movie and update associated genres
    for (const movie of user.movies) {
      // Update genres by removing the movie's reference
      await prismaClient.genres.updateMany({
        where: {
          moviesId: movie.id,
        },
        data: {
          moviesId: null, // Disconnect the movie
        },
      });

      // Delete the movie
      await prismaClient.movies.delete({
        where: { id: convertToType(movie.id) },
      });
    }

    // Delete the user
    await prismaClient.users.delete({
      where: { id:convertToType(userID) },
    });

    return res.status(200).json({ status: "Success", msg: "Delete User" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteUsers = async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.params;
  
  try {
    // Find the user by their email
    const user = await prismaClient.users.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the user using their MongoDB ObjectId
    await prismaClient.users.delete({
      where: { id: email }, // Convert the id to an ObjectID
    });
  
    return res.status(200).json({ status: "Success", msg: "Delete User" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

