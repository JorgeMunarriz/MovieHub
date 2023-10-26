import { Toaster } from "react-hot-toast";
import { CardContainer, SideBar } from "../../../components";
import { HomePageStyles } from "./homepage.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useSearchParams } from "react-router-dom";

export const HomePage = () => {
  const { isAuthenticated, user } = useAuth0();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchParamsRating, setSearchParamsRating] = useSearchParams();
  const [searchParamsYear, setSearchParamsYear] = useSearchParams();
  const queryTitle = searchParams.get("q") || "";
  const queryRating = searchParams.get("r") || "";
  const queryYear = searchParams.get("y") || "";

  const handleChangeParams = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: target.value });
  };
  const handleChangeParamsRating = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParamsRating({ r: target.value });
  };
  const handleChangeParamsYear = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParamsYear({ y: target.value });
  };

  return (
    <HomePageStyles id="mainContainer">
      <SideBar 
      searchParams={searchParams} setSearchParams={setSearchParams} queryTitle={queryTitle} handleChangeParams={handleChangeParams}
      searchParamsRating={searchParamsRating} setSearchParamsRating={setSearchParamsRating} queryRating={queryRating} handleChangeParamsRating={handleChangeParamsRating}
      searchParamsYear={searchParamsYear} setSearchParamsYear={setSearchParamsYear} queryYear={queryYear} handleChangeParamsYear={handleChangeParamsYear} />
      <div className="homePage">
        <div className="homePage__header">
          {!isAuthenticated ? (
            <h2 className="homePage__header-title">Public List of Movies</h2>
          ) : (
            <h2 className="homePage__header-title" id="homePageTitle">
              {user?.name}'s Movies
            </h2>
          )}
        </div>
        <div className="homePage__main">
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              // Default options for specific types
              success: {
                duration: 3000,
              },
            }}
          />
          <CardContainer queryTitle={queryTitle} queryRating={queryRating} queryYear={queryYear} />
        </div>
        <div className="homePage__footer">
          <button className="homePage__footer-buttonViewMore">View more</button>
        </div>
      </div>
    </HomePageStyles>
  );
};
