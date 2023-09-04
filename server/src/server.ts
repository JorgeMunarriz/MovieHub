import express from "express";
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
  .use("/users", UserRouter)
  .use("/movies", MoviesRouter)
  .use("/genres", GenresRouter)
  .use(errorHandler);
export default app;
