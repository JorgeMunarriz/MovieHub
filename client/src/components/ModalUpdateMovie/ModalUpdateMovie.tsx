import { useState, useEffect } from "react";
import {  ModalUpdateButton, ModalUpdateContainer, ModalUpdateContent, ModalUpdateMovieStyles } from "./modalUpdateMovie.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { getMovieById, updateMovie } from "../../api";
import { VITE_URL_MOVIES } from "../../global/serverUrl";
import {  MoviesType } from "../../types/moviehub.types";
import { useMovieContext } from "../../hooks/useContextHook";

export const ModalUpdateMovie = ({id, title, score, year, country, genresArray, image, genres }:MoviesType) => {
  const { fetchMovies } = useMovieContext();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [movieData, setMovieData] = useState({ title, year, score, country, genresArray, image, genres });
  

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>();  
  
  const { register, handleSubmit } = useForm<MoviesType>();
  
  
  useEffect(() => {
    if (modalIsOpen) {
      const url = `${VITE_URL_MOVIES}/${id}`;      
      getMovieById(url, getAccessTokenSilently).then((movie) => {
        if (movie) {
          console.log(movie)
          setMovieData({
            title: movie.title,
            year: movie.year,
            score: movie.score,
            country: movie.country,
            genresArray: movie.genresArray,
            image: movie.image,
            genres: movie.genres
          });
          setImagePreview(movie.imageUrl)
        } else {
          console.log("Movie not found")
        }
        return movie
      });
    }
  }, [modalIsOpen, id, getAccessTokenSilently]);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; 

    if (file) {    
      setSelectedFile(file);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onsubmit = handleSubmit((data: any) => {
    const url = `${VITE_URL_MOVIES}/${id}`;
    const updatedData = {
      ...data, genres: data.genres.split(",").map((genre:string) => genre.trim()),
    }
    updateMovie(url, updatedData, getAccessTokenSilently);
    setIsOpen(!modalIsOpen);  
    fetchMovies()  
  });


  return (
    <ModalUpdateMovieStyles>
      {isAuthenticated && (<button className="modal__btn-open" onClick={toggleModal}>Update</button>)}

      {modalIsOpen && (
        <ModalUpdateContainer>
          <ModalUpdateContent>
            <h2>Update Movie</h2>
            <form className="form__modal" onSubmit={onsubmit}>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalName">
                  Movie's Name
                </label>
                <input
                  className="form__modal-div-input"
                  type="text"
                  id="formModalName"
                  {...register("title")}
                  value={movieData.title}
                  onChange={(e) => setMovieData({ ...movieData, title: e.target.value })}
                />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalScore">
                  Movie's Score
                </label>
                <input
                  className="form__modal-div-input"
                  type="number"
                  id="formModalScore"
                  {...register("score")}
                  value={movieData.score.toString()}
                  onChange={(e) => setMovieData({ ...movieData, score: parseInt(e.target.value, 10) })}
                />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalYear">
                  Movie's Year
                </label>
                <input
                  className="form__modal-div-input"
                  type="number"
                  id="formModalYear"
                  {...register("year")}
                  value={movieData.year.toString()}
                  onChange={(e) => setMovieData({ ...movieData, year: parseInt(e.target.value,10)  })}
                />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalCountry">
                  Movie's Country
                </label>
                <input
                  className="form__modal-div-input"
                  type="text"
                  id="formModalCountry"
                  {...register("country")}
                  value={movieData.country}
                  onChange={(e) => setMovieData({ ...movieData, country: e.target.value })}
                />
              </div>
               <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalGenre">
                  Movie's Genres
                </label>
                <input
                  className="form__modal-div-input"
                  type="text"
                  id="formModalGenre"
                  {...register("genres")}
                  value={movieData.genresArray}
                  onChange={(e) => setMovieData({ ...movieData, genresArray: e.target.value.split(',') })}
                />
              </div> 
              <div className="form__modal-div-img">
              {selectedFile ? (<img className="form__modal-div-img-imgPreview" src={URL.createObjectURL(selectedFile)} alt="Preview" />): (<img className="form__modal-div-img-imgPreview" src={imagePreview} alt="Preview" />) }
                <label className="form__modal-div-label-uploadFile" htmlFor="formModalFile">
                  Upload Image
                </label>
                <input
                  className="form__modal-div-input"
                  type="file"
                  id="formModalFile"
                  {...register("image")}
                  onChange={handleFileChange} />
              </div>
              <button className="form__modal-btnAddMovie" type="submit" >
                Update Movie
              </button>
            </form>
            <ModalUpdateButton onClick={toggleModal}>Close Modal</ModalUpdateButton>
          </ModalUpdateContent>
        </ModalUpdateContainer>
      )}
    </ModalUpdateMovieStyles>
  );
};
