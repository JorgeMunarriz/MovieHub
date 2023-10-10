
import { CardContainer, SideBar } from "../../../components";
import { HomePageStyles } from "./homepage.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useSearchParams } from "react-router-dom";

export const HomePage = () => {
  const { isAuthenticated, user } = useAuth0();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const handleChangeParams = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setSearchParams({ q: target.value });
	};

 

  return (
    <HomePageStyles id="mainContainer">
      <SideBar searchParams={searchParams} setSearchParams={setSearchParams} query={query} handleChangeParams={handleChangeParams}  />
      <div className="homePage">
      <div className="homePage__header">
        { !isAuthenticated ? <h2 className="homePage__header-title">Public List of Movies</h2>: 
         <h2 className="homePage__header-title" id="homePageTitle">{user?.nickname}'s Movies</h2>
        }
      </div>
      <div className="homePage__main">
         <CardContainer query={query}/>
      </div>
      <div className="homePage__footer">95
        <button className="homePage__footer-buttonViewMore">View more</button>
      </div>
      </div>
    </HomePageStyles>
  );
};
