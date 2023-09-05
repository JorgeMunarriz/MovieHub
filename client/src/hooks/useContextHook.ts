import { useContext } from "react";
import { MovieContext, MovieContextState } from "../context/MovieContext";

export const useMovieContext = (): MovieContextState => {
    const context = useContext(MovieContext);
    if (context === undefined) {
      throw new Error('useMovieContext debe ser utilizado dentro de un MovieProvider');
    }
    return context;
  };