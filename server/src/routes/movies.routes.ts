import {Router, Request, Response} from 'express'
import { checkTwoCharacters } from '../middleware/check.middleware';
import { createMovie, deleteMovieByID, getAllMovies, getMovieByID, updateMovieByID } from '../controllers/movies.controller';

const MoviesRouter = Router();

MoviesRouter
    .get('/', getAllMovies)
    .get('/:movieID', getMovieByID)
    .post('/:userID', checkTwoCharacters, createMovie)
    .delete('/:movieID', deleteMovieByID)
    .put('/:movieID', updateMovieByID);

export default MoviesRouter;