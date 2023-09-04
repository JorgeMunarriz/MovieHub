import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getDataApi } from "../../api";
import { Cards } from "..";
import { MoviesType } from "../../types/moviehub.types";


export const GetPrivateMovies = () => {
  const [moviesData, setMoviesData] = useState<MoviesType[]>([]);

  const { getAccessTokenSilently, user } = useAuth0();
  const url = `users/${user?.email}`;  
  
  const fetchMovies = async () => {
    const data = await getDataApi(url, getAccessTokenSilently);
    setMoviesData(data.movies);
  };

  useEffect(() => {   
    
    fetchMovies();

    const fetchInterval = setInterval(() => fetchMovies(), 5000);
    return () =>
        clearInterval(fetchInterval);
  }, [ getAccessTokenSilently, url]);
  
  useEffect(() => {
    
  
  }, [moviesData]);


  return (
    <>
      {moviesData.map((movies) => (
        
        <Cards key={movies.id} {...movies} fetchMovies={fetchMovies} />
      ))}
    </>
  );
};
