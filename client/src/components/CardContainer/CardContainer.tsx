import { Suspense, LazyExoticComponent, ComponentType, lazy, useEffect, useState } from "react";

import { useMovieContext } from "../../hooks/useContextHook";
import MyLoader from "../../assets/skeleton/loader";
import { CardContainerStyles } from "./cardContainer.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesType } from "../../types/moviehub.types";
import { getDataApiPublic } from "../../api";
import { ButtonGoUp } from "./ButtonBackUp/ButtonGoUp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LazyCards: LazyExoticComponent<ComponentType<any>> = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("../Cards/Cards"));
    }, 500);
  });
});

type ProprQuery = {
  query: string;
};

export const CardContainer = ({ query }: ProprQuery) => {
  const { moviesData } = useMovieContext();
  const { isAuthenticated } = useAuth0();
  

  //   const [isLoading, setIsLoading] = useState(false)

  const [movies, setMovies] = useState<MoviesType[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getDataApiPublic("publicmovies");
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <CardContainerStyles>
        {moviesData && isAuthenticated
          ? moviesData
              .filter(({ title }) => {
                if (!query) return true;
                if (query) {
                  const titleLowerCase = title.toLowerCase();
                  return titleLowerCase.includes(query.toLowerCase());
                }
              })
              .map(({ id, title, score, year, country, genres, genresArray, createdAt, updatedAt, image, imageUrl, imageId, users }) => (
                <Suspense key={id} fallback={<MyLoader />}>
                  <LazyCards
                    key={id}
                    id={id}
                    title={title}
                    score={score}
                    year={year}
                    country={country}
                    genres={genres}
                    imageUrl={imageUrl}
                    genresArray={genresArray}
                    image={image}
                    imageId={imageId}
                    createdAt={createdAt}
                    updatedAt={updatedAt}
                    users={users}
                  />
                </Suspense>
              ))
          : movies
              .filter(({ title }) => {
                if (!query) return true;
                if (query) {
                  const titleLowerCase = title.toLowerCase();
                  return titleLowerCase.includes(query.toLowerCase());
                }
              })
              .map((movies) => (
                <Suspense key={movies.id} fallback={<MyLoader />}>
                  <LazyCards
                    key={movies.id}
                    id={movies.id}
                    title={movies.title}
                    score={movies.score}
                    year={movies.year}
                    country={movies.country}
                    genres={movies.genres}
                    imageUrl={movies.imageUrl}
                    genresArray={movies.genresArray}
                    image={movies.image}
                    imageId={movies.imageId}
                    createdAt={movies.createdAt}
                    updatedAt={movies.updatedAt}
                    users={movies.users}
                  />
                </Suspense>
              ))}
        <ButtonGoUp  />
      </CardContainerStyles>
    </>
  );
};
