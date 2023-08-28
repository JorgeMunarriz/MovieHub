import { CardsStyles } from "./cards.styles";
import { image } from "../../assets/img";
import { MoviesType } from "../../api";
import {  BsHeartFill} from 'react-icons/bs'

export const Cards = (props: MoviesType) => {
  
  return (
    <CardsStyles>
      <div className="card__header">
        <img className="card__header-img" src={image} alt={image} />
        <div className="card__header-divHeart"><BsHeartFill/></div>
      </div>
      <div className="card__main">
        <h2 className="card__main-titleMovie">{props.title}</h2>
        <h3 className="card__main-yearMovie">Year:  {props.year}.  Score: {props.score}/100</h3>
        <p></p>

        <div className="card__main-div">
        <h3 className="card__main-div-genreMovie">Genres:
        <ul className="card__main-div-ul">
          {
            props.genresArray.map((genre) =>
            <li className="card__main-div-ul-genresList">{genre}</li>)
          }
        </ul>
        </h3>
        </div>
      </div>
    </CardsStyles>
  );
};
