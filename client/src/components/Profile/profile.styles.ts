import styled from 'styled-components';

export const ProfileStyles = styled.div`
display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  .profileDiv{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    &__div{
        display: flex;
        width: 100px;
        height: 100px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        overflow: hidden;
        &-img{
            display: block;
            width: 100px;
            height: 100%;

        }
     
    }
    &__h2{
        font-size: 2rem;
        color: rgba(255, 255, 255, 0.8);
    }
    &__paragraph{
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.4);

    }
  }
`;


