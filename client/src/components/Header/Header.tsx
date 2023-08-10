import { Link } from "react-router-dom";
import { Modal } from "..";
import { Logo } from "../Logo/Logo";
import { HeaderStyles } from "./header.styles";
import { useAuth0 } from "@auth0/auth0-react";


export const Header = () => {
  const {isAuthenticated} = useAuth0()
  return (
    <HeaderStyles>
      <div className="header__left">
        <Logo />
        <h1 className="header__left-title"><Link className="header__left-title-link" to={""}>MovieHub</Link></h1>
      </div>
      <div className="header__right">
        {
          isAuthenticated ? (
            <Link to={"/profile"} className="header__right-signbtn">Profile</Link>): 
          <Link to={"/login"} className="header__right-signbtn">Log In</Link>
        }
        {isAuthenticated&&<Modal/>}
      </div>
    </HeaderStyles>
  );
};
