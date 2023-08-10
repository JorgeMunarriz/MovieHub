import {Router} from 'express'
import { createMovie, deleteMovieByID, getAllMovies, getMovieByID, updateMovieByID } from '../../controllers/movies.controller';

const privateRequest = Router();

privateRequest
    .get('/private', getAllMovies)
    .get('/private', getMovieByID)
    .post('/private', createMovie)
    .delete('/private', deleteMovieByID)
    .put('/private', updateMovieByID);

export default privateRequest;