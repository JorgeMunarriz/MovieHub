import express from 'express'
import { UserRouter, MoviesRouter, GenresRouter, RequestRouter } from './routes';
import morgan from 'morgan';
import cors from 'cors';

const app = express()
app
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", RequestRouter)
    // .use("/users", UserRouter)
    // .use("/movies", MoviesRouter)
    // .use("/genres", GenresRouter)

 export default app;