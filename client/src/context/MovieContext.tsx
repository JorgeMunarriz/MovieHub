import { createContext, useState, ReactNode, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesType } from "../types/moviehub.types";
import { getDataApi, updateMovieLikedStatus } from "../api";
import { VITE_URL_MOVIES } from "../global/serverUrl";

// Interface's context
export interface MovieContextState {
  moviesData: MoviesType[];
  fetchMovies: () => void;
  likedMovies: {[movieId: string]: boolean };
  toggleLikedStatus: (movieId: string) => void; 

}

// CreateContext
export const MovieContext = createContext<MovieContextState | undefined>(undefined);

type TypeProps = {
  children: ReactNode;
};

export const MovieProvider = (props: TypeProps) => {
  const [moviesData, setMoviesData] = useState<MoviesType[]>([]); 
  const [likedMovies, setLikedMovies] = useState<{ [movieId: string]: boolean }>({}); 
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();

  const url = `users/${user?.email}`;

  const fetchMovies = async () => {
    const data = await getDataApi(url, getAccessTokenSilently);
    setMoviesData(data.movies);
  }; 
  const toggleLikedStatus = async (movieId: string) => {
    try {
      // Verifica si al usuario le gusta la película o no
      const isLiked = likedMovies[movieId] || false;

      // Llama a la función de servicio para actualizar el estado "liked" en el servidor
      await updateMovieLikedStatus(VITE_URL_MOVIES, movieId, !isLiked, getAccessTokenSilently);

      // Actualiza el estado "likedMovies" para reflejar el cambio
      setLikedMovies((prevLikedMovies) => ({
        ...prevLikedMovies,
        [movieId]: !isLiked,
      }));
    } catch (error) {
      console.error("Failed to toggle 'liked' status:", error);
    }
  };

  useEffect(() => {
    if(!isAuthenticated){
      return
    } else {
      const fetchInterval = setInterval(() => fetchMovies(), 1000);
      return () => clearInterval(fetchInterval);
    }
    
  }, [url]);
  useEffect(() => {}, [moviesData]);

  const contextValue: MovieContextState = {
    moviesData,
    fetchMovies,
    likedMovies, 
    toggleLikedStatus,
  };

  return <MovieContext.Provider value={contextValue}>{props.children}</MovieContext.Provider>;
};



