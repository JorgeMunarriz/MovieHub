import {Router} from 'express'
import { createGenre, deleteGenreByID, getAllGenre, getGenreByID, updateGenreByID } from '../../controllers/';

const GenresRouter = Router();

GenresRouter
    .get('/', getAllGenre)
    .post('/', createGenre)
    .get('/:genreID', getGenreByID)
    .delete('/:genreID', deleteGenreByID)
    .put('/:genreID', updateGenreByID);

export default GenresRouter;