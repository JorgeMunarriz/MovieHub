import { CardsStyles } from "./cards.styles";
import { image } from "../../assets/img";

export const Cards = () => {
  return (
    <CardsStyles>
      <div className="card__header">
        <img className="card__header-img" src={image} alt={image} />
      </div>
      <div className="card__main">
        <h4 className="card__main-titleMovie">Avatar 1</h4>
        <h5 className="card__main-yearMovie">Year - 2009</h5>
        <p className="card__main-genreMovie">Genre - Action</p>
      </div>
    </CardsStyles>
  );
};
