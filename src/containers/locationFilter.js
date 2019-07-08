import React from "react";
import SingleEventCard from "../components/singleEvent";

class LocationFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventList: props.data,
      uniqueLocation: [],
      searchResult: []
    };

    let locationList = this.state.eventList.map((e, i) => {
      return `${e.VenueCity}`;
    });
    this.state.uniqueLocation = locationList.filter(function(item, index) {
      return locationList.indexOf(item) >= index;
    });
  }

  handleSelect = e => {
    let filteredEvent = [];
    for (let i = 0; i < this.state.eventList.length; i++) {
      const locationName = this.state.eventList[i].VenueCity;
      if (locationName.includes(e.target.value)) {
        filteredEvent.push(this.state.eventList[i]);
      }
    }
    this.setState({ searchResult: filteredEvent });
  };

  render() {
    return (
      <>
        <div className="form-group">
          <label>Select by Location</label>
          <select className="form-control" onChange={this.handleSelect}>
            {this.state.uniqueLocation.map((e, i) => {
              return (
                <option key={i} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <div className="event-wrapper">
          {this.state.searchResult.map((e, i) => {
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
      </>
    );
  }
}

export default LocationFilter;
