import React from "react";
import "./style/home.css";
import jsonData from "../data/eventlist.json";

//Image
import EltonJohnImg from "./image/eltonJohn.jpg";
//Components
import LocationFilter from "../containers/locationFilter";

const HomePage = props => {
  return (
    <div className="home-page-view">
      <img src={EltonJohnImg} alt="artist-img" className="home-page-img" />
      <div>
        <LocationFilter data={jsonData} />
      </div>
    </div>
  );
};

export default HomePage;
