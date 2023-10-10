import styled from "styled-components";

export const HomePageStyles = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  overflow: scroll;
  
  .homePage {
    display: flex;
    flex-direction: column;
    width: 100%;
    &__header {
      display: flex;
      justify-content: center;
      text-align: center;
      &-title {
        font-size: 2rem;
        text-decoration: underline;
      }
    }
    &__main {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 30px 0.5vh;
      gap: 1vw;
    }
    &__footer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 95%;
      padding: 1vw;
      border-top: 1px solid rgba(0, 0, 0, 0.8);
      margin: 0 auto;
      &-buttonViewMore {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 0.5rem;
        padding: 8px 16px;
        background-color: rgba(0, 55, 55, 0.6);
        color: #fff;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background-color: rgba(0, 40, 55, 0.9);
        }
      }
    }
  }
`;
