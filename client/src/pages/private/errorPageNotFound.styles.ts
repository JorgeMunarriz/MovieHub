import styled from "styled-components";

export const ErrorPageNotFoundStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .errorPage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 1vw;
    &__title {
      display: flex;
      justify-items: center;
      align-items: center;
      color: rgba(255, 255, 255, 1);
      font-size: 3rem;
    }
    &__linkRedirect {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      background: rgba(213, 213, 223, 0.7);
      color: #000;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s;
      padding: 1vw;
      &:hover {
        background-color: rgba(113, 113, 123, 1);
        transform: scale(1.1);
      }
    }
  }
`;
