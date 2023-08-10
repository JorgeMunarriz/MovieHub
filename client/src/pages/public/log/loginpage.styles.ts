import styled from "styled-components";

export const LoginPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .loginpage__divInputs {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    &-label {
      color: #fff;
      font-size: 2rem;
    }
    &-input {
      width: 400px;
      padding: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 15px;
    }
  }
  .loginpage__divButtons {
    display: flex;
    flex-direction: column;

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(230, 55, 55, 0.6);
      border: 1px solid rgba(0, 0, 0, 0.7);
      border-radius: 18px 18px 18px 18px;
      -moz-border-radius: 18px 18px 18px 18px;
      -webkit-border-radius: 18px 18px 18px 18px;
      border: 1px solid #000000;
      -webkit-box-shadow: 10px 10px 6px 0px rgba(0, 0, 0, 0.54);
      -moz-box-shadow: 10px 10px 6px 0px rgba(0, 0, 0, 0.54);
      box-shadow: 10px 10px 6px 0px rgba(0, 0, 0, 0.54);
      transition: all 0.5s ease-in-out;
      &:hover {
        background: rgba(230, 55, 55, 0.9);
        border: 1px solid rgba(0, 0, 0, 0.7);
      }
    }
  }
`;
