import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//Pages
import Header from "./components/header";
import HomePage from "./components/home";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
