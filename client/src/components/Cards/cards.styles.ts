import styled from 'styled-components';

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
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  margin-bottom: 4rem;
  .card__header{
    display: flex;
    width: 100%;
    height: 70%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow: hidden;
    padding: 0;
    position: relative;
    &-img{
        display: block;
        position: relative;
        width: 100%;
        object-fit: cover;
    }
    &-divHeart{
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
      z-index: 100;
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
  .card__main{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    &-titleMovie{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    &-yearMovie{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      width: 100%;
    }
    &-titleMovie{
      font-size: 2rem;
    }
  }
`;

