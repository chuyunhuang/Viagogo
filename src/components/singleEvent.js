import React from "react";

const SingleEventCard = props => {
  return (
    <div className="single-event-card">
      <div className="single-event-card-detail">
        <div>Date: {props.date}</div>
      </div>
      <div className="single-event-card-detail">
        <div>Time: {props.time} </div>
      </div>
      <div className="single-event-card-detail">
        <div>City: {props.city} </div>
      </div>
      <div className="single-event-card-detail">
        <div>Location: {props.location}</div>
      </div>
      <div className="single-event-card-detail">
        <div>Ticket Price: {props.price}</div>
      </div>
    </div>
  );
};

export default SingleEventCard;
