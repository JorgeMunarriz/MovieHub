import { useState } from "react";
import { useEffect } from "react";
import { MoviesType } from "../../types/moviehub.types";
import { getDataApiPublic } from "../../api";
import { Cards } from "..";

export const GetPublicMovies = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  useEffect(() => {

    const fetchMovies = async () => {
      const data = await getDataApiPublic("publicmovies");
      setMovies(data);
    };
    fetchMovies();

  }, []);

  useEffect(() => {
    
  }, [ movies]);

  return (
    <>
      {movies.map((movies) => (
        <Cards
          key={movies.id}
          id={movies.id}
          title={movies.title}
          score={movies.score}
          year={movies.year}
          country={movies.country}
          imageUrl={movies.imageUrl}
          genres={movies.genres}
          genresArray={movies.genresArray}
          createdAt={movies.createdAt}
          updatedAt={movies.updatedAt}
          users={movies.users} image={null} imageId={""} fetchMovies={function (): void {
            throw new Error("Function not implemented.");
          } }        />
      ))}
    </>
  );
};
