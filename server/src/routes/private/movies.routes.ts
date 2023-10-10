import {Router} from 'express'
import { createMovie, deleteMovieByID, getAllMovies, getAllMoviesByUser, getMovieByID, updateMovieByID, updateMovieLikedStatus } from '../../controllers';

const MoviesRouter = Router();

MoviesRouter
    .get('/', getAllMovies)
    .get('/users/:userEmail', getAllMoviesByUser)
    .get('/:movieID', getMovieByID)
    .post('/:userID', createMovie)
    .delete('/:movieID', deleteMovieByID)
    .put('/:movieID', updateMovieByID)
    .put('/like/:movieID', updateMovieLikedStatus);

export default MoviesRouter;