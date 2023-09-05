import styled from "styled-components";
export const ModalDeleteMovieStyles = styled.div`
  display: flex;
  .modal__btn-open {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.5rem;
    padding: 8px 16px;
    background-color: rgba(230, 55, 55, 0.6);
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: rgba(230, 55, 55, 0.9);
    }
  }
`;

export const ModalDeleteContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalDeleteContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  .modalDelete__title {
    font-size: 2.5rem;
  }

  &-modal__ {
    margin-top: 10px;
    width: 200px;
    padding: 8px 16px;
    background-color: rgba(0, 123, 250, 0.8);
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 123, 250, 0.6);
    }
  }
`;
export const ModalDeleteButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  width: 200px;
  background-color: rgba(250, 50, 80, 0.6);
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(50, 50, 50, 0.6);
  }
`;

export const ModalCloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  width: 200px;
  background-color: rgba(50, 50, 50, 0.8);
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(50, 50, 50, 0.6);
  }
`;
