import styled from "styled-components";
import { background } from "../../assets/img";

export const HeaderStyles = styled.header`
  grid-area: 1 / 1 / 2 / 11;
  background-image: url(${background});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vw 2vw;
  .header__left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    padding: 5px;
    background-color: rgba(113, 113, 123, 0.6);
    color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 20px;

    transition: all 0.3s ease-in-out;
    gap: 1rem;
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      path {
        width: 50%;
        color: rgba(250, 250, 250, 0.6);
      }

      &-title {
      }
    }
    &:hover {
      background-color: rgba(113, 113, 123, 0.9);
      color: rgba(250, 250, 250, 1);
      transform: scale(1.1);
    }
  }
  .header__right {
    display: flex;
    gap: 0.5rem;
    &-div {
      display: flex;
      gap: 0.5rem;
      &-signbtn {
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
        text-overflow: ellipsis;
        svg {
        width: 15px;
        height: 15px;
        
    }
        &:hover {
          background-color: rgba(230, 55, 55, 0.95);
        }
      }
    }
  }
`;
