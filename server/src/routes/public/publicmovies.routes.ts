import {Router} from 'express'
import { createPublicMovie, deletePublicMovieByID, getPublicAllMovies, getPublicMovieByID, updatePublicMovieByID } from '../../controllers';


const PublicMoviesRouter = Router();

PublicMoviesRouter
    .get('/', getPublicAllMovies)
    .get('/:movieID', getPublicMovieByID)
    .post('/', createPublicMovie)
    .delete('/:movieID', deletePublicMovieByID)
    .put('/:movieID', updatePublicMovieByID);

export default PublicMoviesRouter;