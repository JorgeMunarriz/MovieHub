import { CardsStyles } from "./cards.styles";
import { image } from "../../assets/img";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ModalDeleteMovie, ModalUpdateMovie } from "..";
import { MoviesType } from "../../types/moviehub.types";
import { useMovieContext } from "../../hooks/useContextHook";
import { useState } from "react";

const Cards = ({ ...props }: MoviesType) => {
  const {  isAuthenticated } = useAuth0();
  const { moviesData, likedMovies, toggleLikedStatus } = useMovieContext();
  const [ isLikedButton, setIsLikedButton ] = useState(false);

  const handleLiked = async () => {
    await toggleLikedStatus(props.id);
    setIsLikedButton(!isLikedButton); 
  };

  return (
    <CardsStyles>
      <div className="card__header">
        <img className="card__header-img" src={props.imageUrl} alt={props.title} />
        <div className="card__header-divHeart">
        {isLikedButton ? (
                <button className="card__header-divHeart-button" onClick={handleLiked}>
                  <BsHeartFill />
                </button>
              ) : (
                <button className="card__header-divHeart-button" onClick={handleLiked}>
                  <BsHeart />
                </button>
              )}
        </div>
      </div>
      <div className="card__main">
        <p className="card__main-country">
          {props.country},{props.year}
        </p>
        <h2 className="card__main-titleMovie">{props.title}</h2>
        <h3 className="card__main-scoreMovie">
          Score: <img className="card__main-scoreMovie-imdbLogo" src={image} alt={image} /> {props.score}/100
        </h3>
        <p></p>

        <div className="card__main-div">
          <h3 className="card__main-div-genreMovie">
            Genres:
            <ul className="card__main-div-ul">
              <li className="card__main-div-ul-genresList">{props.genresArray.join(", ")}</li>
            </ul>
          </h3>
        </div>
        <div className="card__footer">
          <Link className="card__footer-detailsLink" to={`movie/${props.id}`}>
            Details{" "}
          </Link>
          {isAuthenticated && (
            <div className="card__footer-div">
            <ModalDeleteMovie key={props.id} {...props}/>
              <ModalUpdateMovie
                id={props.id}
                title={props.title}
                score={props.score}
                year={props.year}
                country={props.country}
                image={props.image}
                genres={props.genres}
                genresArray={props.genresArray}
                createdAt={props.createdAt}
                updatedAt={props.updatedAt}
                users={props.users}
                imageId={props.imageId}
                imageUrl={props.imageUrl}
              />
            </div>
          )}
        </div>
      </div>
    </CardsStyles>
  );
};
export default Cards;
