import { CardsStyles } from "./cards.styles";
import { image } from "../../assets/img";
import { MoviesType } from "../../api/TestApi";

export const Cards = (props: MoviesType) => {
  return (
    <CardsStyles>
      <div className="card__header">
        <img className="card__header-img" src={image} alt={image} />
      </div>
      <div className="card__main">
        <h4 className="card__main-titleMovie">{props.title}</h4>
        <h5 className="card__main-yearMovie">Year - {props.year}</h5>
        <p className="card__main-genreMovie">Genre - {props.genresArray}</p>
      </div>
    </CardsStyles>
  );
};
