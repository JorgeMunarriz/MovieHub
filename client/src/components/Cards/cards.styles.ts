import styled from "styled-components";

export const CardsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 275px;
  height: 550px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  .card__header {
    display: flex;
    width: 100%;
    height: 70%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow: hidden;
    padding: 0;
    position: relative;
    &-img {
      display: block;
      position: relative;
      width: 100%;
      object-fit: cover;
    }
    &-divHeart {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 1);
      height: 30px;
      width: 30px;
      border-radius: 50%;
      z-index: 1;
      padding: 2px;
      &-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 1);
        height: 100%;
        width: 100%;
        border: none;
        border-radius: 50%;
        z-index: 1;
        padding: 2px;
        color: #fff;
        cursor: pointer;
        svg {
          width: 80%;
          height: 80%;
          path {
            width: 80%;
            color: rgba(210, 55, 55, 0.7);
            transition: all 0.3s ease-in-out;
            &:hover {
              color: rgba(210, 55, 55, 1);
            }
          }
        }
      }
    }
  }
  .card__main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    &-country {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    &-titleMovie {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    &-scoreMovie {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 1.5rem;
      width: 100%;
      &-imdbLogo {
        width: 20px;
        height: 20px;
      }
    }

    &-div {
      display: flex;
      &-genreMovie {
        color: rgba(0, 0, 0, 0.8);
      }
      &-ul {
        display: flex;
        &-genresList {
          padding-left: 5px;
        }
      }
    }
  }
  .card__footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    &-detailsLink {
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
    &-div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      &-delete {
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
    }
  }
`;
