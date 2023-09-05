import { useAuth0 } from '@auth0/auth0-react';
import { ButtonStyles } from '..';

export const LogOutButton = () => {
  const {logout} = useAuth0()

  return  <ButtonStyles onClick={()=>logout({logoutParams: { returnTo: window.location.origin}})}>Log Out</ButtonStyles>
}
