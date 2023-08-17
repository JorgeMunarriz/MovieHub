import { Link, useNavigate } from "react-router-dom";
import { ButtonStyles, LogOutButton, Modal } from "..";
import { Logo } from "../Logo/Logo";
import { HeaderStyles } from "./header.styles";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0();
  const navigate = useNavigate()

  const handleLogin = async () => {
    await loginWithPopup();
    navigate('/profile')
  }


  return (
    <HeaderStyles>
      <div className="header__left">
        <Logo />
        <h1 className="header__left-title">
          <Link className="header__left-title-link" to={""}>
            MovieHub
          </Link>
        </h1>
      </div>
      <div className="header__right">
        {isAuthenticated ? (
          <div className="header__right-div">
            <Link to={"/profile"} className="header__right-div-signbtn">
              Profile
            </Link>
            <LogOutButton/>
          </div>
        ) : (
          // <Link to={"/login"} className="header__right-div-signbtn">
          //   Log In
          // </Link>
          <ButtonStyles onClick={()=> handleLogin()}>
            Log In
          </ButtonStyles>
        )}
        {isAuthenticated && <Modal />}
      </div>
    </HeaderStyles>
  );
};
