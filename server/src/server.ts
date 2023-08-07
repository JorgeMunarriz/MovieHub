import express from 'express'
import { UserRouter, MoviesRouter, GenresRouter } from './routes';
import morgan from 'morgan';
import cors from 'cors';

const app = express()
app
    .use(express.json())
    .use(morgan("dev"))
    .use(cors())
    .use("/users", UserRouter)
    .use("/movies", MoviesRouter)
    .use("/genres", GenresRouter)

 export default app;