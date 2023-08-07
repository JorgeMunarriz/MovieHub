import styled from 'styled-components';

export const SideBarStyles = styled.div`
  grid-area: 2 / 1 / 10 / 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .sidebar__header{
    display: flex;
    align-items: center;
    &-title{
        font-size: 2rem;
    }
  }
  .sidebar__main{
    display: flex;
    &-filters{
        display: flex;
        flex-direction: column;
        list-style: none;
        width: 100%;
        gap: 10px;
        &-list{
            width: 100px;
            &-button{
                cursor: pointer;
                width: 80px;
                border: 1px solid rgba(255, 255, 255, 0.8);
            }
        }
    }
  }

`;


