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
  queryTitle: string;
  queryRating: string;
  queryYear: string;
};

export const CardContainer = ({ queryTitle, queryRating, queryYear }: ProprQuery) => {
  const { moviesData } = useMovieContext();
  const { isAuthenticated } = useAuth0();

  const [movies, setMovies] = useState<MoviesType[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getDataApiPublic("publicmovies");
      setMovies(data);
    };

    fetchMovies();
  }, []);

  const filteredMovies = (isAuthenticated ? moviesData : movies).filter(({ title, score, year }) => {
    if (!queryTitle && !queryRating && !queryYear) return true;
    const titleLowerCase = title.toLowerCase();
    const scoreString = score.toString();
    const yearString = year.toString();
    const numericRating = parseFloat(queryRating);
    const numericYear = parseInt(queryYear, 10);

    return (
      (!queryTitle || titleLowerCase.includes(queryTitle.toLowerCase())) &&
      (!queryRating || (!isNaN(numericRating) && scoreString.includes(queryRating))) &&
      (!queryYear || (!isNaN(numericYear) && yearString.includes(queryYear)))
    );
  });

  return (
    <CardContainerStyles>
      {filteredMovies.length > 0 ? (
        filteredMovies.map(({ id, title, score, year, country, genres, genresArray, createdAt, updatedAt, image, imageUrl, imageId, users }) => (
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
      ) : (
        <h3 className="movieNotFound">The movie you are looking for has not been found, please search for another movie.</h3>
      )}
      <ButtonGoUp />
    </CardContainerStyles>
  );
};
