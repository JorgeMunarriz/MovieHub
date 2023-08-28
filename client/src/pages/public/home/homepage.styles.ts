import styled from 'styled-components';

export const HomePageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .homePage__header{
    display: flex;
    text-align: center;
    &-title{
        font-size: 2rem;
        color: rgba(250, 250, 250, 0.6);
        text-decoration: underline;
    }
  }
  .homePage__main{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1vw;
    gap: 1vw;
    overflow: auto;
    
  }
  .homePage__footer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 1vw;
    border-top: 1px solid rgba(0, 0, 0, 0.8);
    &-buttonViewMore{
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

`;


