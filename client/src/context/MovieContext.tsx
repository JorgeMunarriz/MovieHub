import { createContext, useState, ReactNode, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'; 
import { MoviesType } from '../types/moviehub.types';
import { getDataApi } from '../api';

// Define una interfaz para el estado del contexto
export interface MovieContextState {
  moviesData: MoviesType[]; // Ajusta esto a tu tipo de datos real
  fetchMovies: () => void;
  deleteMovie: (movieId: string) => void; 
}

// Crea el contexto y proporciona un valor inicial (vacío)
export const MovieContext = createContext<MovieContextState | undefined>(undefined);

type TypeProps = {
    children: ReactNode;
  }

// Crea un componente que actúe como proveedor del contexto
export const MovieProvider = ( props : TypeProps) => {
  const [moviesData, setMoviesData] = useState<MoviesType[]>([]);
  const { getAccessTokenSilently, user } = useAuth0()
  
  const url = `users/${user?.email}`;

  // Define la función fetchMovies
  const fetchMovies = async () => {
    const data = await getDataApi(url, getAccessTokenSilently);
      setMoviesData(data.movies);      
  };
  const deleteMovie = async (movieId: string) => {
    // Realiza la eliminación en el servidor
    // ...
  
    // Actualiza el estado excluyendo la película eliminada
    setMoviesData((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
  };
 

  // useEffect(() => {
    
  //     fetchMovies();
    
  // }, [url]);
  // useEffect(() => {
    
  
  // }, [moviesData]);

  // Pasa el estado y las funciones a través del contexto
  const contextValue: MovieContextState = {
    moviesData,
    fetchMovies,
    deleteMovie
  };

  return <MovieContext.Provider value={contextValue}>{props.children}</MovieContext.Provider>;
};



