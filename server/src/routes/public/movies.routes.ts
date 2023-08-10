import {Router} from 'express'
import { checkTwoCharacters } from '../../middleware/check.middleware';
import { createMovie, deleteMovieByID, getAllMovies, getMovieByID, updateMovieByID } from '../../controllers/';

const MoviesRouter = Router();

MoviesRouter
    .get('/', getAllMovies)
    .get('/:movieID', getMovieByID)
    .post('/:userID', createMovie)
    .delete('/:movieID', deleteMovieByID)
    .put('/:movieID', updateMovieByID);

export default MoviesRouter;