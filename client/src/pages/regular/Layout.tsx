import { Outlet } from "react-router-dom"
import { RegularPages } from "."
import {  Header, SideBar, Footer } from "../../components"


export const Layout = () => {
    return (
        <RegularPages>
            <Header />
            <SideBar />
            <main className="regularPages__grid">
                <Outlet/>                
            </main>
            <Footer />


        </RegularPages>

    )
}
