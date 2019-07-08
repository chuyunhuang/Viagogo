import React from "react";
import SingleEventCard from "../components/singleEvent";

class PriceFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventList: props.data,
      sorted: [],
      searchResult: []
    };
    let priceList = this.state.eventList.map((e, i) => {
      return e.MinPrice;
    });
    let priceArr = [];
    let parsePrice = priceList.forEach((e, i) => {
      priceArr.push(parseInt(e.replace("£", " ")));
    });
    this.state.sorted = priceArr.sort(function(a, b) {
      return a - b;
    });
  }

  handleSelect = e => {
    let filterPrice = [];
    for (let i = 0; i < this.state.eventList.length; i++) {
      const price = this.state.eventList[i].MinPrice;
      if (price.includes(e.target.value)) {
        filterPrice.push(this.state.eventList[i]);
      }
    }
    this.setState({ searchResult: filterPrice });
  };

  render() {
    return (
      <>
        <div className="form-group">
          <label>Select by Price</label>
          <select className="form-control" onChange={this.handleSelect}>
            {this.state.sorted.map((e, i) => {
              return (
                <option key={i} value={e}>
                  Price: £{e}
                </option>
              );
            })}
          </select>
        </div>
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
      </>
    );
  }
}

export default PriceFilter;
