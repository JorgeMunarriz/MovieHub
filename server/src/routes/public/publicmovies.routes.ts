import {Router} from 'express'
import { createMovie, deleteMovieByID, getAllMovies, getMovieByID, updateMovieByID } from '../../controllers';

const PublicMoviesRouter = Router();

PublicMoviesRouter
    .get('/', getAllMovies)
    .get('/:movieID', getMovieByID)
    .post('/:userID', createMovie)
    .delete('/:movieID', deleteMovieByID)
    .put('/:movieID', updateMovieByID);

export default PublicMoviesRouter;