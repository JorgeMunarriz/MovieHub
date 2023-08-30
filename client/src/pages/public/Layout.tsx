import { Outlet } from "react-router-dom"
import { RegularPages } from "../index"
import {  Header, Footer } from "../../components"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { postApi } from "../../api/postApi";


export const Layout = () => {
  const {user, getAccessTokenSilently} = useAuth0();
  const url = "http://localhost:3005/users"
  

  useEffect(() => {
    if(user){postApi(url, user, getAccessTokenSilently)}

  }, [getAccessTokenSilently, user])
  


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
