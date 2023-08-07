import { Link } from "react-router-dom";
import { Modal } from "..";
import { Logo } from "../Logo/Logo";
import { HeaderStyles } from "./header.styles";


export const Header = () => {
  return (
    <HeaderStyles>
      <div className="header__left">
        <Logo />
        <h1 className="header__left-title"><Link className="header__left-title-link" to={""}>MovieHub</Link></h1>
      </div>
      <div className="header__right">
        <Link to={"/login"} className="header__right-signbtn">Log In</Link>
        <Modal/>
      </div>
    </HeaderStyles>
  );
};
