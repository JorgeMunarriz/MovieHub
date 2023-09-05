import { createContext, useState, ReactNode, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesType } from "../types/moviehub.types";
import { getDataApi } from "../api";

// Interface's context
export interface MovieContextState {
  moviesData: MoviesType[];
  fetchMovies: () => void;
}

// CreateContext
export const MovieContext = createContext<MovieContextState | undefined>(undefined);

type TypeProps = {
  children: ReactNode;
};

export const MovieProvider = (props: TypeProps) => {
  const [moviesData, setMoviesData] = useState<MoviesType[]>([]);
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();

  const url = `users/${user?.email}`;

  const fetchMovies = async () => {
    const data = await getDataApi(url, getAccessTokenSilently);
    setMoviesData(data.movies);
  }; 

  // const deleteMovie = async (movieId: string) => {

  //   setMoviesData((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
  // };

  useEffect(() => {
    if(!isAuthenticated){
      return
    } else {
      setTimeout(() => {
        fetchMovies()
      }, 1000);
      const fetchInterval = setInterval(() => fetchMovies(), 1000);
      return () => clearInterval(fetchInterval);
    }
      // fetchMovies()
    
  }, [url]);
  useEffect(() => {}, [moviesData]);

  const contextValue: MovieContextState = {
    moviesData,
    fetchMovies,
  };

  return <MovieContext.Provider value={contextValue}>{props.children}</MovieContext.Provider>;
};
