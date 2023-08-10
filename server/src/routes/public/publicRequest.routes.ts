import {Router} from "express";
import {createGenre, createMovie, createUser, deleteGenreByID, deleteMovieByID, deleteUserByID, getAllGenre, getAllMovies, getAllUsers, getGenreByID, getMovieByID, getUserByID, updateGenreByID, updateMovieByID, updateUserByID} from "../../controllers/";

const publicRouter = Router()

publicRouter
    .post("/users", createUser)
    .get("/users", getAllUsers)
    .get("/users/:userID", getUserByID)
    .put("/users/:userID", updateUserByID)
    .delete("/users/:userID", deleteUserByID)

    .get('/genres', getAllGenre)
    .post('/genres', createGenre)
    .get('/genres/:genreID', getGenreByID)
    .delete('/genres/:genreID', deleteGenreByID)
    .put('/genres/:genreID', updateGenreByID)

    .get('/movies', getAllMovies)
    .get('/movies/:movieID', getMovieByID)
    .post('/movies/:userID', createMovie)
    .delete('/movies/:movieID', deleteMovieByID)
    .put('/movies/:movieID', updateMovieByID);

export default publicRouter
