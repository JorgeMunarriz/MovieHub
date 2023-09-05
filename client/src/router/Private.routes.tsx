import { Navigate, Outlet } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'
import { SpinnerDotted } from "spinners-react";
// import { PrivatePage } from "../pages";


const PrivateRoute = () => {

    const { isAuthenticated, isLoading } = useAuth0();

    // if (!isAuthenticated) {
    //     window.alert('User has to be logged to navigate to the profile area.');
    //     return <Navigate to={'/'}></Navigate>
    // }
    if (isLoading) return <SpinnerDotted size={65} thickness={113} speed={148} color="rgba(172, 83, 57, 1)" />
    if(isAuthenticated) return <Outlet/>
    return  <Navigate to={'/'}></Navigate>


    
};

export default PrivateRoute;