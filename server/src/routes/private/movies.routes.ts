import {Router} from 'express'
import { createMovie, deleteMovieByID, getAllMovies, getMovieByID, updateMovieByID, updateMovieLikedStatus } from '../../controllers';

const MoviesRouter = Router();

MoviesRouter
    .get('/', getAllMovies)
    .get('/:movieID', getMovieByID)
    .post('/:userID', createMovie)
    .delete('/:movieID', deleteMovieByID)
    .put('/:movieID', updateMovieByID)
    .put('/like/:movieID', updateMovieLikedStatus);

export default MoviesRouter;