import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, moviesArray } = req.body;

  try {
    if (!name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }    
    // Check if a user with the given email already exists
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ error: "User with this email already exists" });
    }
    const newUser = await prisma.users.create({
      data: { name, email, moviesArray },
    });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allUsers = await prisma.users.findMany({
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
    const userById = await prisma.users.findUnique({
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
  const { name, email, password } = req.body;
  try {
    const userById = await prisma.users.update({
      where: { id: userID },
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
    const user = await prisma.users.findUnique({
      where: { id: userID },
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
      await prisma.genres.updateMany({
        where: {
          moviesId: movie.id,
        },
        data: {
          moviesId: null, // Disconnect the movie
        },
      });

      // Delete the movie
      await prisma.movies.delete({
        where: { id: movie.id },
      });
    }

    // Delete the user
    await prisma.users.delete({
      where: { id: userID },
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
    const user = await prisma.users.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the user using their MongoDB ObjectId
    await prisma.users.delete({
      where: { id: email }, // Convert the id to an ObjectID
    });
  
    return res.status(200).json({ status: "Success", msg: "Delete User" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

