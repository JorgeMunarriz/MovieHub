import { BsHeartFill } from "react-icons/bs";
import { image as imageImdb} from "../../assets/img";
import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import { getDataApi} from "../../api";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesType } from "../../types/moviehub.types";
import { ModalUpdateMovie } from "../../components";

export const MoviesPageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movieData, setMovieData] = useState<MoviesType>();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const url = `movies/${id}`;
  
  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getDataApi(url, getAccessTokenSilently);
      setMovieData(data);
      return data
    };
    fetchMovie();
  }, [getAccessTokenSilently, url]);
  
  if(!movieData){
    return console.log("Movie data not found")
  }

  return (
    <div>
      <div className="movieDetails">
        <img className="movieDetails-img" src={movieData.imageUrl} alt={movieData.title} />
        <div className="movieDetails-divHeart">
          <BsHeartFill />
        </div>
      </div>
      <div className="movieDetails__main">
        <p className="movieDetails__main-country">
          {movieData.country},{movieData.year}
        </p>
        <h2 className="movieDetails__main-titleMovie">{movieData.title}</h2>
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
       {isAuthenticated && 
        <div>
          <button>Delete Movie</button>
          <ModalUpdateMovie  {...movieData}/>
       </div> 
       }
      </div>
    </div>
  );
};
