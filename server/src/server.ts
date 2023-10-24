import express, { Request, Response } from "express";
import { UserRouter, MoviesRouter, GenresRouter, PublicMoviesRouter } from "./routes";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { checkJwtMiddleware } from "./middleware/checkjwt.middleware";
import { errorHandler } from "./middleware/error.middleware";
import fileUpload from 'express-fileupload';


const app = express();
app
  .use(cors())
  .use(morgan("dev"))
  .use(helmet())
  .use(express.json())
  .use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "./uploads",
    })
  )
  .use("/publicmovies", PublicMoviesRouter)
  .use("/users",  UserRouter)
  .use("/movies", MoviesRouter)
  .use("/genres", GenresRouter)
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "Welcome to the API world"})
  })
  .use(errorHandler);
export default app;
