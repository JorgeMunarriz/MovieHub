import { useState } from "react";
import { useEffect } from "react";
import { getDataApi } from "./getDataApi";
import { Cards } from "../components/Cards/Cards";
import { useAuth0 } from "@auth0/auth0-react";

interface MoviesType {
  id: string;
  title: string;
  score: number;
  year: number;
  country: string;
  imageId: string;
  genres: GenreType[];
  genresArray: string[];
  createdAt: string;
  updatedAt: string;
  usersId: string;
}

interface GenreType {
  id: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
  moviesId: string[];
}

export const GetMovies = () => {
  const [moviesData, setMoviesData] = useState<MoviesType[]>([]);

  const { getAccessTokenSilently, user } = useAuth0();
  const url = `users/${user?.email}`;

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getDataApi(url, getAccessTokenSilently);
      setMoviesData(data.movies);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    // console.log(user);
    console.log(moviesData);
    // console.log(genres);
  }, [moviesData]);

  return (
    <>
      {moviesData.map((movies) => (
        <Cards key={movies.id} {...movies} />
      ))}
    </>
  );
};
