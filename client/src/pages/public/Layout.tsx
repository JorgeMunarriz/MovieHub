import { Outlet } from "react-router-dom"
import { RegularPages } from "../index"
import {  Header, Footer } from "../../components"


export const Layout = () => {
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
