import { Request, Response } from "express";
import UserModel from "../model/user.model";
import prisma from "../db/prismaClient";

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newUser = await prisma.users.create({
      data: { name, email, password },
    });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allUsers = await prisma.users.findMany();

    // find().populate({
    //     path: "movies",
    //     populate: {
    //         path: "genres",
    //         select: "_id genre",
    //     },
    // });

    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getUserByID = async (req: Request, res: Response): Promise<Response> => {
  const { userID } = req.params;
  try {
    const userById = await prisma.users.findUnique({
        where: { id: userID}
    })
    
    // .populate({
    //   path: "movies",
    //   populate: {
    //     path: "genres",
    //     select: "_id genre",
    //   },
    // });

    return res.status(200).json(userById);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateUserByID = async (req: Request, res: Response): Promise<Response> => {
  const { userID } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await prisma.users.update({
        where: { id: userID },
        data: { name, email, password}
    });
        
        // userID, { $set: { name, email, password } }, { new: true });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteUserByID = async (req: Request, res: Response): Promise<Response> => {
  const { userID } = req.params;

  try {
    await prisma.users.delete({
        where: {id: userID}
    })
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json(error);
  }
};
