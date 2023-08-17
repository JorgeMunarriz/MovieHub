import { useEffect } from "react";
import { getAllUsers, getUserByID } from "../../../api/fetchUrlUser";
import { Cards } from "../../../components";
import { HomePageStyles } from "./homepage.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllMovies } from "../../../api/fetchUrlMovies";
import { TestApi } from "../../../api/TestApi";





export const HomePage = () => {
  const {getAccessTokenSilently} = useAuth0()
  useEffect(() => {
    getAllUsers()
    getUserByID("64d17564b3057c1c237fd175")

   getAllMovies(getAccessTokenSilently)
  
  
    
  }, [getAccessTokenSilently])
   

  return (
    <HomePageStyles>
      <div className="homePage__header">
        <h2 className="homePage__header-title">List of Movies</h2>
      </div>
      <div className="homePage__main">
      <Cards id={""} title={""} score={0} year={0} imageId={""} genres={[]} genresArray={[]} createdAt={""} updatedAt={""} usersId={""} />
      
      <TestApi/>
      </div>
      <div className="homePage__footer">
        <button className="homePage__footer-buttonViewMore">View more</button>
      </div>
    </HomePageStyles>
  );
};
