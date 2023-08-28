import { Outlet } from "react-router-dom"
import { RegularPages } from "../index"
import {  Header, Footer } from "../../components"
import {  VITE_URL_USERS } from "../../global/serverUrl";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { postApi } from "../../api/postApi";


export const Layout = () => {
  const {user, getAccessTokenSilently} = useAuth0();
  

  useEffect(() => {
    if (user){postApi(VITE_URL_USERS, user, getAccessTokenSilently)}
  }, [user])
  


    return (
        <RegularPages>
            <Header />
            {/* <SideBar /> */}
            <main className="regularPages__grid">
                <Outlet/>                
            </main>
            <Footer />


        </RegularPages>

    )
}
