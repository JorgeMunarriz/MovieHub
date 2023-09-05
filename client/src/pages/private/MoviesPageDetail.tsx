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
  const [ isLikedButton, setIsLikedButton ] = useState(false);
  const {  toggleLikedStatus } = useMovieContext();

  const url = `movies/${id}`;

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getDataApi(url, getAccessTokenSilently);
      setMovieData(data);
      setIsLikedButton(data.isLiked);
      return data;
    };
    fetchMovie();
  }, [getAccessTokenSilently, url]);

  if (!movieData) {
    return <div>Movie Page not found</div>;
  }
  const handleLiked = async () => {
    await toggleLikedStatus(movieData.id);
    setIsLikedButton(!isLikedButton); 
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
              {!isLikedButton ? (
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
            {movieData.country},{movieData.year}
          </p>
          <h3 className="movieDetails__main-scoreMovie">
            Score: <img className="movieDetails__main-scoreMovie-imdbLogo" src={imageImdb} alt="IMDB-logo" /> {movieData.score}/100
          </h3>
          <div className="movieDetails__main-div">
            <h3 className="movieDetails__main-div-genreTitle">
              Genres:
            </h3>
              <ul className="movieDetails__main-div-ul">
                <li className="movieDetails__main-div-ul-genresList">{movieData?.genresArray.join(", ")}</li>
              </ul>
          </div>
          {isAuthenticated && (
            <div className="movieDetails__footer">
              <ModalDeleteMovie key={movieData.id} {...movieData} />
              <ModalUpdateMovie {...movieData} />
            </div>
          )}
        </div>
      </div>
    </MoviesPageDetailStyles>
  );
};
