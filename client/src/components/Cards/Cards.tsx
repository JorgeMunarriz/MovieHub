import { CardsStyles } from "./cards.styles";
import { image } from "../../assets/img";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { deleteMovie } from "../../api";
import { useAuth0 } from "@auth0/auth0-react";
import { VITE_URL_MOVIES } from "../../global/serverUrl";
import { ModalUpdateMovie } from "..";
import { MoviesType } from "../../types/moviehub.types";
import { useMovieContext } from "../../hooks/useContextHook";

const Cards = ({ ...props }: MoviesType) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
   const { fetchMovies } = useMovieContext();

  const url = `${VITE_URL_MOVIES}/${props.id}`;

  const handleDelete = async () => {
    await deleteMovie(url, getAccessTokenSilently);
    fetchMovies();
  };

  return (
    <CardsStyles>
      <div className="card__header">
        <img className="card__header-img" src={props.imageUrl} alt={props.title} />
        <div className="card__header-divHeart">
          <BsHeartFill />
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
              <button className="card__footer-div-delete" onClick={handleDelete}>
                Delete movie
              </button>
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
