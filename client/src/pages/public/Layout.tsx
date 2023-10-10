import { Outlet } from "react-router-dom"
import {  Header, Footer } from "../../components"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { postApi } from "../../api/postApi";
import { VITE_URL_USERS } from "../../global/serverUrl";
import { LayoutPage } from './layoutPage.styles';
import { ButtonTheme } from "../../components/ChangeTheme/ButtonTheme";


export const Layout = () => {
  const {user, getAccessTokenSilently, isAuthenticated} = useAuth0();
  // const url = "http://localhost:3005/users"
  

  useEffect(() => {
    if(user && isAuthenticated){postApi(VITE_URL_USERS, user, getAccessTokenSilently)}

  }, [getAccessTokenSilently, isAuthenticated, user])
  


    return (
        <LayoutPage>
          <ButtonTheme/>
            <Header />            
            <main className="regularPages__grid">
                <Outlet/>                
            </main>
            <Footer />
        </LayoutPage>

    )
}
