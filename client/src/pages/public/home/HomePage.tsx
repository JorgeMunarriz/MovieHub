import { HomePageStyles } from "./homepage.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { GetMovies, PublicDataApi } from "../../../api";

export const HomePage = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <HomePageStyles>
      <div className="homePage__header">
        {!isAuthenticated ? <h2 className="homePage__header-title">List of Movies</h2>: 
        <h2 className="homePage__header-title">{user?.nickname}´s Movies</h2>}
      </div>
      <div className="homePage__main">
        {!isAuthenticated ? (<PublicDataApi />)
         : (<GetMovies/>)}
      </div>
      <div className="homePage__footer">
        <button className="homePage__footer-buttonViewMore">View more</button>
      </div>
    </HomePageStyles>
  );
};
