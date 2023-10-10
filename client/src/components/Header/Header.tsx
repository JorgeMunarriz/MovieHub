import { Link, useNavigate } from "react-router-dom";
import { ButtonStyles, LogOutButton, Modal } from "..";
import { HeaderStyles } from "./header.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { BsFilm, BsPersonCircle } from "react-icons/bs";

export const Header = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithPopup();
    navigate("/profile");
  };

  return (
    <HeaderStyles>
      <Link className="header__left" to={"/"}>
        <BsFilm />
        <h1 className="header__left-title" >MovieHub</h1>
      </Link>
      <div className="header__right">
        {isAuthenticated ? (
          <div className="header__right-div">
            <Link to={"/profile"} className="header__right-div-signbtn">
              <BsPersonCircle/>
              Profile
            </Link>
            <LogOutButton />
          </div>
        ) : (
          <ButtonStyles onClick={() => handleLogin()}>Log In</ButtonStyles>
        )}
        {isAuthenticated && <Modal />}
      </div>
    </HeaderStyles>
  );
};
