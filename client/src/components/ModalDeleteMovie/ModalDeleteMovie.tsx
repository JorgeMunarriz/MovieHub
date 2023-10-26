import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteMovie, getMovieById } from "../../api";
import { VITE_URL_MOVIES } from "../../global/serverUrl";
import { MoviesType } from "../../types/moviehub.types";
import { useMovieContext } from "../../hooks/useContextHook";
import { ModalCloseButton, ModalDeleteButton, ModalDeleteContainer, ModalDeleteContent, ModalDeleteMovieStyles } from "..";

export const ModalDeleteMovie = ({ id }: MoviesType) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const { fetchMovies } = useMovieContext();

  const url = `${VITE_URL_MOVIES}/${id}`;

  const handleDelete = async () => {
    await deleteMovie(url, getAccessTokenSilently);
    
    fetchMovies();
    setIsOpen(false);
  };

  useEffect(() => {
    if (modalIsOpen) {
      const url = `${VITE_URL_MOVIES}/${id}`;
      getMovieById(url, getAccessTokenSilently).then((movie) => {
        
        return movie;
      });
    }
  }, [modalIsOpen, id, getAccessTokenSilently]);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <ModalDeleteMovieStyles>
      {isAuthenticated && (
        <button className="modal__btn-open" onClick={toggleModal}>
          Delete Movie
        </button>
      )}

      {modalIsOpen && (
        <ModalDeleteContainer>
          <ModalDeleteContent className="modal-content">
            <h2 className="modalDelete__title">Are you sure to delete Movie?</h2>
            <ModalDeleteButton className="modalDelete__btnDelete" onClick={handleDelete}>Delete Movie</ModalDeleteButton>

            <ModalCloseButton className="modalDelete__btnClose" onClick={toggleModal}>Close Modal</ModalCloseButton>
          </ModalDeleteContent>
        </ModalDeleteContainer>
      )}
    </ModalDeleteMovieStyles>
  );
};
