import { useAuth0 } from "@auth0/auth0-react";
import { ButtonStyles } from "..";
import { BsEscape } from "react-icons/bs";

export const LogOutButton = () => {
  const { logout } = useAuth0();

  return <ButtonStyles onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><BsEscape/> Log Out</ButtonStyles>;
};
