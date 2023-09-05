import styled from "styled-components";

export const MoviesPageDetailStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .movieDetails {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    &__header {
      display: flex;
      width: 40%;

      &-img {
        display: flex;
        width: 400px;
      }
      &-divHeart {
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 1);
        height: 50px;
        width: 50px;
        border-radius: 50%;
        z-index: 10;
        padding: 2px;
        svg {
          width: 80%;
          height: 80%;
          path {
            width: 80%;
            color: rgba(250, 250, 250, 0.6);
            transition: all 0.3s ease-in-out;
            &:hover {
              color: rgba(250, 250, 250, 1);
            }
          }
        }
      }
    }
    &__main {
      display: flex;
      flex-direction: column;
      width: 60%;
      &-titleMovie {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 2rem;
      }
      &-country {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 2rem;
      }
      &-scoreMovie {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 2rem;
        &-imdbLogo {
          display: block;
          width: 20px;
          height: 20px;
        }
      }
      &-div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 2rem;
        &-genreMovie {
          display: flex;
        }
        &-ul {
          display: flex;
          &-genresList {
            text-decoration: none;
            list-style: none;
          }
        }
      }
      &__footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        &-buttonDelete {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20%;
          background-color: rgba(113, 113, 123, 0.6);
          color: #000;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            background-color: rgba(113, 113, 123, 0.9);
          }
        }
      }
    }
  }
`;
