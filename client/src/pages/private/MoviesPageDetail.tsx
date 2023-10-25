import { BsHeart, BsHeartFill } from "react-icons/bs";
import { image as imageImdb } from "../../assets/img";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataApi } from "../../api";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesType } from "../../types/moviehub.types";
import { ModalDeleteMovie, ModalUpdateMovie } from "../../components";
import { MoviesPageDetailStyles } from "./moviesPageDetail.styles";
import { useMovieContext } from "../../hooks/useContextHook";

export const MoviesPageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movieData, setMovieData] = useState<MoviesType>();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const { toggleLikedStatus, likedMovies } = useMovieContext();

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
    return <div>Movie Page not found</div>;
  }
  if (!id) {
    return <div>Movie Page not found</div>;
  }

  const isLikedMovie = likedMovies && id ? likedMovies[id] || false : false;

  likedMovies[id];

  const handleLiked = async () => {
    await toggleLikedStatus(id);
  };

  return (
    <MoviesPageDetailStyles>
      <div className="movieDetails">
        <div className="movieDetails__header">
          <img className="movieDetails__header-img" src={movieData.imageUrl} alt={movieData.title} />
        </div>
        <div className="movieDetails__main">
          <h2 className="movieDetails__main-titleMovie">
            {movieData.title}
            <div className="movieDetails__main-titleMovie-divHeart">
              {isLikedMovie ? (
                <button className="movieDetails__main-titleMovie-divHeart-button" onClick={handleLiked}>
                  <BsHeartFill />
                </button>
              ) : (
                <button className="movieDetails__main-titleMovie-divHeart-button" onClick={handleLiked}>
                  <BsHeart />
                </button>
              )}
            </div>
          </h2>
          <p className="movieDetails__main-country">
            Country: {movieData.country},{movieData.year}
          </p>
          <h3 className="movieDetails__main-scoreMovie">
            Score:{movieData.score}/100 <img className="movieDetails__main-scoreMovie-imdbLogo" src={imageImdb} alt="IMDB-logo" />
          </h3>
          <div className="movieDetails__main-div">
            <h3 className="movieDetails__main-div-genreTitle">Genres:</h3>
            <ul className="movieDetails__main-div-ul">
              <li className="movieDetails__main-div-ul-genresList">{movieData?.genresArray.join(", ")}</li>
            </ul>
          </div>
          {isAuthenticated && (
            <div className="movieDetails__footer">
              <div className="movieDetails__footer_containerButtons">
              <ModalDeleteMovie key={movieData.id} {...movieData} />
              <ModalUpdateMovie {...movieData} />
              </div>
              <div className="movieDetails__footer_containerDescription">
                <p className="movieDetails__footer_containerDescription_text">Movie's description: {movieData.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </MoviesPageDetailStyles>
  );
};
