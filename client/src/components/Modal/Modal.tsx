import { useState } from "react";
import { ModalButton, ModalContainer, ModalContent, ModalStyles } from "./modal.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { createMovie } from "../../api/createMovie";
import { VITE_URL_MOVIES } from "../../global/serverUrl";
import { image } from "../../assets/img";

export const Modal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { register, handleSubmit } = useForm();

  const onsubmit = handleSubmit((data: any) => {
    const url = `${VITE_URL_MOVIES}/${user?.email}`;
    createMovie(url, data, getAccessTokenSilently);
  });

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <ModalStyles>
      {isAuthenticated && (
        <button className="modal__btn-open" onClick={toggleModal}>
          {" "}
          Add{" "}
        </button>
      )}

      {modalIsOpen && (
        <ModalContainer>
          <ModalContent>
            <h2>Add Movie</h2>
            <form className="form__modal" onSubmit={onsubmit}>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalName">
                  Movie's Name
                </label>
                <input className="form__modal-div-input" type="text" id="formModalName" placeholder="Iron Man" {...register("Name")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalScore">
                  Movie's Score
                </label>
                <input className="form__modal-div-input" type="text" id="formModalScore" placeholder="1-100" {...register("Score")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalYear" >
                  Movie's Year
                </label>
                <input className="form__modal-div-input" type="text" id="formModalYear" placeholder="2008" {...register("Year")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalCountry">
                  Movie's Country
                </label>
                <input className="form__modal-div-input" type="text" id="formModalCountry" placeholder="USA" {...register("Country")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalGenre">
                  Movie's Genres
                </label>
                <input className="form__modal-div-input" type="text" id="formModalGenre" placeholder="Action, Adventure..." {...register("Genre")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label-uploadFile" htmlFor="formModalFile">
                  Upload Image
                </label>
                <input className="form__modal-div-input" type="file" id="formModalFile" {...register("Image")} />
              </div>
              <button className="form__modal-btnAddMovie" type="submit" onClick={toggleModal}>
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
