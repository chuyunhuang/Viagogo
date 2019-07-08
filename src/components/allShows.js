import React from "react";
import jsonData from "../data/eventlist.json";

//Image
import EltonJohnImg from "./image/eltonJohn.jpg";

//Components
import SingleEventCard from "./singleEvent";

const AllShows = prop => {
  return (
    <>
      <div className="home-page-view">
        <div className="event-title">Elton John Concerts</div>
        <img src={EltonJohnImg} alt="artist-img" className="home-page-img" />

        <div className="event-wrapper">
          {jsonData.map((e, i) => {
            return (
              <SingleEventCard
                key={i}
                day={e.Day}
                name={e.EventName}
                date={e.Date}
                time={e.Time}
                city={e.VenueCity}
                location={e.VenueName}
                price={e.MinPrice}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllShows;
