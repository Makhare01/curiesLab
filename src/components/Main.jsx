import React from "react";

// Components
import { Switch, Route } from "react-router-dom";
import Boxes from "../components/Boxes/Boxes";
import MainPageSwiper from "./mainPageSwiper";
import About from "./About/About";
import Team from "./Team/Team";
import NewsComponent from "./News/NewsComponent";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPageSwiper />
      </Route>
      <Route exact path="/boxes">
        <Boxes active={1} />
      </Route>
      <Route exact path="/about-us">
        <About active={2} />
      </Route>
      <Route exact path="/team">
        <Team active={3} />
      </Route>

      <Route exact path="/news">
        <NewsComponent />
      </Route>
    </Switch>
  );
};

export default Main;
