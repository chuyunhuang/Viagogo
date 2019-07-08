import React from "react";
import jsonData from "../data/eventlist.json";

//Image
import EltonJohnImg from "../components/image/eltonJohn.jpg";
//Components
import PriceFilter from "../containers/priceFilter";

const BestDeals = props => {
  return (
    <div className="home-page-view">
      <img src={EltonJohnImg} alt="artist-img" className="home-page-img" />
      <div>
        <PriceFilter data={jsonData} />
      </div>
    </div>
  );
};

export default BestDeals;
