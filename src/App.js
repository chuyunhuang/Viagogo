import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//Pages
import Header from "./components/header";
import HomePage from "./components/home";
import AllShows from "./components/allShows";
import BestDeals from "./components/bestDeal";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/bestdeals" exact component={BestDeals} />
        <Route path="/allshows" exact component={AllShows} />
      </Switch>
    </HashRouter>
  );
}

export default App;
