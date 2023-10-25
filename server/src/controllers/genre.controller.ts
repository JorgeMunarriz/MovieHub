import { Request, Response } from "express";
import {prismaClient} from "../db/prismaClient";
// import { convertToType } from '../utils/convertToType';

export const createGenre = async (req: Request, res: Response): Promise<Response> => {
  const {  genre } = req.body;
  try {
    const newGenre = await prismaClient.genres.create({
      data: {genre}
    })
    return res.status(201).send({status:"Success", msg:"Create Succesfully",  newGenre});
  } catch (error) {
   return  res.status(500).send(error);
  }
};

export const getGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  try {
    const genre = await prismaClient.genres.findUnique({
      where: {id: genreID}
    });
   return res.status(200).send(genre);
  } catch (error) {
   return res.status(500).send(error);
  }
};
export const getAllGenre = async (req: Request, res: Response): Promise<Response> => {
  try {
    const genre = await prismaClient.genres.findMany()
   return res.status(200).send(genre);
  } catch (error) {
   return res.status(500).send(error);
  }
};

export const updateGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  const { genre } = req.body;
  try {
    if(!genre){
      return res.status(404).send({msg: 'Genres not found'});
    }
    const genreFound = await prismaClient.genres.update({
      where:{
        id: genreID},
        data:{ genre }      
    })
    
   return res.status(200).send(genreFound);
  } catch (error) {
   return res.status(500).send(error);

  }
};

export const deleteGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  try {
    const deleteGenre = await prismaClient.genres.delete({
      where: {id: genreID}
    })
    
    // GenresModel.findByIdAndDelete(genreID);
   return res.status(200).send({msg: 'Genre Deleted', deleteGenre});
  } catch (error) {
   return res.status(500).send(error);
  }
};
