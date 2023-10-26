import styled from "styled-components";
export const ModalUpdateMovieStyles = styled.div`
  display: flex;
  .modal__btn-open {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.5rem;
    padding: 8px 16px;
    background-color: rgba(230, 55, 55, 0.6);
    font-size: 1.2rem;
    color: var(--text-darkest);
    font-weight: 500;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: rgba(230, 55, 55, 0.9);
    }
  }
`;

export const ModalUpdateContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalUpdateContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  background-color: var(--background-light-max);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  .form__div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.9);
    &-title {
      font-size: 2.5rem;
    }
  }
  .form__modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    width: 90%;
    &-div {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      &-label {
        font-size: 1rem;
        color: rgba(50, 50, 50, 0.8);
        &-uploadFile {
          padding: 15px;
        }
      }
      &-input {
        font-size: 1rem;
        color: rgba(50, 50, 50, 0.8);
        border-radius: 15px;
        padding: 5px;
        width: 80%;

      }
      &-textarea {
        font-size: 1rem;
        color: rgba(50, 50, 50, 0.8);
        border-radius: 15px 15px 0 15px;
        padding: 15px;
        width: 80%;
        margin-bottom: 20px;
        min-width: 200px;
        min-height: 40px;
      }
      &-img {
        display: flex;
        flex-direction: row-reverse;
        &-imgPreview {
          width: 100px;
        }
      }
    }
    &-btnUpdateMovie {
      margin-top: 10px;
      width: 200px;
      font-size: 1.5rem;
      padding: 8px 16px;
      background-color: var(--background-blue);
      color: var(--text-white);
      border: none;
      border-radius: 20px;
      cursor: pointer;
      &:hover {
        background-color: var(--background-blue-hover);
      }
    }
  }
  @media (700px >= width) {
    width: 90%;
    .form__modal-div-img{
      flex-direction: column-reverse;
    }
  }
`;

export const ModalUpdateButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  width: 200px;
  font-size: 1.5rem;

  background-color: rgba(50, 50, 50, 0.8);
  color: var(--text-white);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: rgba(50, 50, 50, 0.6);
  }
`;
