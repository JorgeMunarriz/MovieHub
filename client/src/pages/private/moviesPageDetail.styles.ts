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
      width: 60%;

      &-img {
        display: flex;
        width: 400px;
      }
    }
    &__main {
      display: flex;
      flex-direction: column;
      width: 60%;
      padding: 1vw;
      &-titleMovie {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 4rem;
        color: rgba(250, 250, 250, 0.6);
        gap: 1rem;
        &-divHeart-button {
          display: flex;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;
          height: 50px;
          width: 50px;
          border-radius: 50%;
          border: none;
          padding: 16px;
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
              &:hover {
                color: rgba(210, 55, 55, 1);
              }
            }
          }
        }
      }
      &-country {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 2rem;
        color: rgba(250, 250, 250, 0.6);
      }
      &-scoreMovie {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 2rem;
        color: rgba(250, 250, 250, 0.4);
        &-imdbLogo {
          display: block;
          width: 40px;
          height: 40px;
          margin-left: 10px;
        }
      }
      &-div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 2rem;
        &-genreTitle {
          display: flex;
          justify-content: flex-start;
          font-size: 2rem;
          color: rgba(250, 250, 250, 0.7);
        }
        &-ul {
          display: flex; 
          margin-right: 1vw;
          &-genresList {
            text-decoration: none;
            list-style: none;
            font-size: 2rem;
            color: rgba(250, 250, 250, 0.4);
          }
        }
      }
    }
    &__footer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 1vw;
    }
  }
  @media (width < 768px) {
    .movieDetails {
      flex-direction: column;
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
