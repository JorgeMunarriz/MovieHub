import { useState} from "react";
import { ModalButton, ModalContainer, ModalContent, ModalStyles } from "./modal.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { VITE_URL_MOVIES } from "../../global/serverUrl";
import { createMovie } from "../../api";
import { BsPlusCircle } from "react-icons/bs";
import toast from "react-hot-toast";


export const Modal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { register, handleSubmit } = useForm();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);


  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onsubmit = handleSubmit((data: any) => {
    if (data.title && data.score && data.year && data.country && data.genres) {
      const movieData = {
        ...data,
        genres: data.genres.split(",").map((genre:string) => genre.trim()),
      };
      const url = `${VITE_URL_MOVIES}/${user?.email}`;
      // createMovie(url, movieData, getAccessTokenSilently);
      // toast.success('Successfully created!');
      const myPromise = createMovie(url, movieData, getAccessTokenSilently);
      toast.promise(myPromise, {
        loading: 'Loading',
        success: 'Got the data',
        error: 'Error when fetching',
      });

      setIsOpen(!modalIsOpen);
    } else {
      toast.error("The data does not have the correct structure.");
    }

  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFile(file);
    }
  };
  

  return (
    <ModalStyles>
      {isAuthenticated && (
        <button className="modal__btn-open" onClick={toggleModal}>
          <BsPlusCircle/>
          Add
        </button>
      )}

      {modalIsOpen && (
        <ModalContainer>
          <ModalContent>            
            <h2>Add Movie</h2>
            <form className="form__modal" onSubmit={onsubmit}>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalTitle">
                  Movie's Name
                </label>
                <input className="form__modal-div-input" type="text" id="formModalTitle" placeholder="Iron Man" autoComplete="Movie" {...register("title")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalScore">
                  Movie's Score
                </label>
                <input className="form__modal-div-input" type="text" id="formModalScore" placeholder="1-100" {...register("score")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalYear">
                  Movie's Year
                </label>
                <input className="form__modal-div-input" type="text" id="formModalYear" placeholder="2008" {...register("year")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalCountry">
                  Movie's Country
                </label>
                <input className="form__modal-div-input" type="text" id="formModalCountry" placeholder="USA" {...register("country")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalGenre">
                  Movie's Genres
                </label>
                <input className="form__modal-div-input" type="text" id="formModalGenre" placeholder="Action, Adventure..." {...register("genres")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalDescription">
                  Movie's Description
                </label>
                <textarea
                  className="form__modal-div-textarea"
                  
                  id="formModalDescription"  placeholder="This is a description"
                  {...register("description")}                 
                />
              </div>
              <div className="form__modal-div-img">
                {selectedFile && <img className="form__modal-div-img-imgPreview" src={URL.createObjectURL(selectedFile)} alt="Preview" />}
                <label className="form__modal-div-label-uploadFile" htmlFor="formModalFile">
                  Upload Image
                </label>
                <input className="form__modal-div-input" type="file" id="formModalFile" {...register("image")} onChange={handleFileChange} />
              </div>
              <button className="form__modal-btnAddMovie" type="submit">
                Add Movie
              </button>
            </form>
            <ModalButton onClick={toggleModal}>Close Modal</ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    </ModalStyles>
  );
};
