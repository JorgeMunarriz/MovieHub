import styled from "styled-components";

export const CardsStyles = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 275px;
  height: 550px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.75);
  margin-bottom: 4rem;
  transition: all 0.3s ease-in-out;
  .hovered:hover {
  transform: scale(1.05);
}
  
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
      height: 100%;
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
        border-radius: 50%;
        z-index: 1;
        &-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          border: none;
          padding: 5px;
          &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, red, blue, deeppink, blue, red, deeppink, blue);
            background-size: 800%;
            border-radius: 50%;
            filter: blur(8px);
            animation: glowing 20s linear infinite;
          }
          svg {
            width: 80%;
            height: 80%;
            z-index: 1;
            path {
              width: 80%;
              color: rgba(210, 55, 55, 0.7);
              
              z-index: 1;
              transition: all 0.3s ease-in-out;
            }
          }
          &:hover svg path {
            transition: all 0.2s ease-out;
            color: rgba(210, 55, 55, 1);
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
    border-radius: 0 0 20px  20px ;
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
        margin-left: 10px;
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
        color: var(--text-dark);
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
  @keyframes glowing{
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
