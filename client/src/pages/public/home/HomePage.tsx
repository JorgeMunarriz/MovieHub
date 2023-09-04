import { GetPrivateMovies, GetPublicMovies, SideBar } from "../../../components";
import { HomePageStyles } from "./homepage.styles";
import { useAuth0 } from "@auth0/auth0-react";

export const HomePage = () => {
  const { isAuthenticated, user } = useAuth0();
 

  return (
    <HomePageStyles>
      <SideBar/>
      <div className="homePage">
      <div className="homePage__header">
        {!isAuthenticated ? <h2 className="homePage__header-title">List of Movies</h2>: 
        <h2 className="homePage__header-title">{user?.nickname}´s Movies</h2>}
      </div>
      <div className="homePage__main">
        {!isAuthenticated ? (<GetPublicMovies />)
         : (<GetPrivateMovies/>)}
      </div>
      <div className="homePage__footer">
        <button className="homePage__footer-buttonViewMore">View more</button>
      </div>
      </div>
    </HomePageStyles>
  );
};
