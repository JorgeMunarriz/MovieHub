import styled from "styled-components";

export const FooterStyles = styled.footer`
  grid-area: 10 / 1 / 11 / 11;
  background-color: rgba(50, 50, 50, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
  .footer__header {
    display: flex;
    align-items: center;
    &-socialmedia {
      display: flex;
      gap: 1rem;
      &-list {
        &-link {
          svg {
            path {
              color: rgba(250, 250, 250, 0.6);
              &:hover {
                color: rgba(250, 250, 250, 1);
              }
            }
          }
        }
      }
    }
  }
  .footer__main {
    display: flex;
    &-terms {
      display: flex;
      gap: 1rem;

      &-list {
        color: rgba(250, 250, 250, 1);
      }
    }
  }
  .footer__footer {
    &-copyright {
      color: rgba(250, 250, 250, 1);
    }
  }
`;
