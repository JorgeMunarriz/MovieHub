import styled from "styled-components";

export const SideBarStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  transition: all 0.5s ease-in-out;
  .buttonOpenCloseSidebar {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(50, 50, 50, 1);
    border: 2px solid rgba(50, 50, 50, 1);
    border-radius: 5px;
    margin: 20px;
    transition: all 0.3s ease-in-out;
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;

      path {
        width: 80%;
        color: rgba(250, 250, 250, 0.6);
        transition: all 0.3s ease-in-out;
        &:hover {
          color: rgba(255, 255, 255, 1);
          
        }
      }
    }
    &:hover{
      transform: scale(1.2);
    }
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      &-title {
        font-size: 2rem;
      }
    }
    &__main {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      &-filters {
        display: flex;
        flex-direction: column;
        list-style: none;
        width: 100%;
        gap: 10px;
        &-list {
          width: 100%;
          &-button {
            cursor: pointer;
            width: 80px;
            border: 1px solid rgba(255, 255, 255, 0.8);
          }
        }
      }
    }
  }
`;
