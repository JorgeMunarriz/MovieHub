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
    gap: 0.5rem;
    &-title {
      &-link {
        color: rgba(255, 255, 255, 0.8);
      }
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
        &:hover {
          background-color: rgba(230, 55, 55, 0.9);
        }
      }
    }
  }
`;
