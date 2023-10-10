import styled from 'styled-components';

export const ButtonStyles = styled.button`
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
    font-size: 1rem;
    svg {
        width: 15px;
        height: 15px;
        
    }
    &:hover{
        background-color: rgba(230, 55, 55, 0.9);
    }
`;

