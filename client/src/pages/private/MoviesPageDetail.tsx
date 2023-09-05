import { BsHeartFill } from "react-icons/bs";
import { image as imageImdb } from "../../assets/img";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataApi } from "../../api";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesType } from "../../types/moviehub.types";
import { ModalUpdateMovie } from "../../components";
// import { MoviePageNotFound } from ".";
import { MoviesPageDetailStyles } from "./moviesPageDetail.styles";

export const MoviesPageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movieData, setMovieData] = useState<MoviesType>();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const url = `movies/${id}`;

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getDataApi(url, getAccessTokenSilently);
      setMovieData(data);
      return data;
    };
    fetchMovie();
  }, [getAccessTokenSilently, url]);

  if (!movieData) {
    return <div >Movie Page not found</div>;
  }

  return (
    <MoviesPageDetailStyles>
      <div className="movieDetails">
        <div className="movieDetails__header">
          <img className="movieDetails__header-img" src={movieData.imageUrl} alt={movieData.title} />
          <div className="movieDetails__header-divHeart">
            <BsHeartFill />
          </div>
        </div>
        <div className="movieDetails__main">
          <h2 className="movieDetails__main-titleMovie">{movieData.title}</h2>
          <p className="movieDetails__main-country">
            {movieData.country},{movieData.year}
          </p>
          <h3 className="movieDetails__main-scoreMovie">
            Score: <img className="movieDetails__main-scoreMovie-imdbLogo" src={imageImdb} alt="IMDB-logo" /> {movieData.score}/100
          </h3>
          <div className="movieDetails__main-div">
            <h3 className="movieDetails__main-div-genreMovie">
              Genres:
              <ul className="movieDetails__main-div-ul">
                <li className="movieDetails__main-div-ul-genresList">{movieData?.genresArray.join(", ")}</li>
              </ul>
            </h3>
          </div>
          {isAuthenticated && (
            <div className="movieDetails__footer">
              <button className="movieDetails__footer-buttonDelete">Delete Movie</button>
              <ModalUpdateMovie {...movieData} />
            </div>
          )}
        </div>
      </div>
    </MoviesPageDetailStyles>
  );
};
