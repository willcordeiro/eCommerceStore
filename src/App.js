import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Switch>
          <Route path="/" exact></Route>
  </Switch> */}
      </Router>
    </>
  );
}

export default App;
