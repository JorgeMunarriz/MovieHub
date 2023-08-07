import React from "react";
import { Cards } from "../../../components";
import { HomePageStyles } from "./homepage.styles";

export const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="homePage__header">
        <h2 className="homePage__header-title">List of Movies</h2>
      </div>
      <div className="homePage__main">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </div>
      <div className="homePage__footer">
        <button className="homePage__footer-buttonViewMore">View more</button>
      </div>
    </HomePageStyles>
  );
};
