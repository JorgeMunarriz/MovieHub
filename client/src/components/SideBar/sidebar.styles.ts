import styled from "styled-components";
import "../../index.css";

export const SideBarStyles = styled.div`
  position: sticky;
  top: 0px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px auto;
  background-color: var(--background-dark);
  .buttonOpenCloseSidebar {
    position: fixed;
    top: 125px;
    left: 30px;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(50, 50, 50, 1);
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    transition: all 0.5s ease-in-out;
    z-index: 100;
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;

      path {
        width: 100%;
        color: rgba(250, 250, 250, 0.6);
        transition: all 0.3s ease-in-out;
        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    &:hover {
      transform: scale(1.2);
    }
  }
  .sidebar {
    /* position: sticky;
    top: 100px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scaleY(0);
    transform-origin: left;
    transition: all 0.5s ease-in-out;
    position: relative;
    margin-left: 20px;
    height: 0;
    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      &-title {
        font-size: 2rem;
        color: var(--text-light);
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
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          &-button {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 0.5rem;
            min-width: 80px;
            height: 25px;
            background-color: var(--background-light);
            color: #fff;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              background-color: var(--background-light-hover);
            }
          }
          &-div {
            display: flex;
            &-input {
              background-color: var(--background-light);
              border: 1px solid rgba(255, 255, 255, 0.8);
              border-radius: 5px;
            }
            &-buttonSearch {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 20px;
              border: 1px solid rgba(255, 255, 255, 0.8);
              border-radius: 10px;
            }
          }
        }
      }
    }

    &.active {
      opacity: 1;
      transform: scaleY(1);
      transition: all 0.5s ease-in-out;
      height: 120px;
      position: sticky;
      top: 10px;
    }
  }
`;
