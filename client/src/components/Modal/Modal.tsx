import { useState } from "react";
import { ModalButton, ModalContainer, ModalContent, ModalStyles } from "./modal.styles";

import { IoAddCircleOutline} from 'react-icons/io5'

export const Modal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }
  return (

    <ModalStyles>
      <button className="modal__btn-open" onClick={openModal}><IoAddCircleOutline/> Add </button>
      {modalIsOpen && (
        <ModalContainer>
          <ModalContent>
            <div className="form__div">
            <h2 className="form__div-title">Add Movie</h2>
            </div>
            <form className="form__modal" action="post">
                <div className="form__modal-div">
                    <label className="form__modal-div-label" htmlFor="formModalName">Movie Name</label>
                    <input className="form__modal-div-input" type="text" id="formModalName" />
                </div>
                <div className="form__modal-div">
                    <label className="form__modal-div-label" htmlFor="formModalScore">Movie Score</label>
                    <input className="form__modal-div-input" type="text" id="formModalScore" />
                </div>
                <div className="form__modal-div">
                    <label className="form__modal-div-label" htmlFor="formModalGenre">Movie Genre</label>
                    <input className="form__modal-div-input" type="text" id="formModalGenre"/>
                </div>
                <div className="form__modal-div-file">
                    <label className="form__modal-div-file-label" htmlFor="formModalFile">Upload File Image</label>
                    <input className="form__modal-div-file-input" type="file" id="formModalFile"/>
                </div>
                <button className="form__modal-btnAddMovie" type="submit">Add Movie</button>
            </form>
            <ModalButton onClick={closeModal}>Close Modal</ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    

    </ModalStyles>
  )
}