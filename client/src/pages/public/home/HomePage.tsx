import { useEffect } from "react";
// import { getAllUsers, getUserByID } from "../../../api/fetchUrlUser";
import { HomePageStyles } from "./homepage.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllMovies } from "../../../api/fetchUrlMovies";
import { GetMovies, PublicDataApi } from "../../../api";
// import { TestApi } from "../../../api/TestApi";

export const HomePage = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  useEffect(() => {
    // getAllUsers();
    // getUserByID("64d17564b3057c1c237fd175");

    getAllMovies(getAccessTokenSilently);
  }, [getAccessTokenSilently]);

  return (
    <HomePageStyles>
      <div className="homePage__header">
        <h2 className="homePage__header-title">List of Movies</h2>
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
