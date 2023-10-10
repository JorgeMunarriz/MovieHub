import styled from 'styled-components';

const ButtonGoUpStyles = styled.button`
            position: fixed;
            right: 20px;
            bottom: 200px;
            
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
`;

export default ButtonGoUpStyles;
