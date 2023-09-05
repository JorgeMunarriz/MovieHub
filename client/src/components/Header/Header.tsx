import { Link, useNavigate } from "react-router-dom";
import { ButtonStyles, LogOutButton, Modal } from "..";
import { HeaderStyles } from "./header.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { BsFilm } from "react-icons/bs";
import { useMovieContext } from "../../hooks/useContextHook";
import { useEffect } from "react";

export const Header = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0();
  const { fetchMovies } = useMovieContext();

  const navigate = useNavigate()

  const handleLogin = async () => {
    await loginWithPopup();
    navigate('/profile')
  }
  // useEffect(() => {
  //   if (isAuthenticated){
  //    fetchMovies()
  //   } 
    
  // }, [])
  


  return (
    <HeaderStyles>
      <div className="header__left">
        <BsFilm />
        <h1 className="header__left-title">
          <Link className="header__left-title-link" to={"/"}>
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
          
          <ButtonStyles onClick={()=> handleLogin()}>
            Log In
          </ButtonStyles>
        )}
        {isAuthenticated && <Modal />}
      </div>
    </HeaderStyles>
  );
};
