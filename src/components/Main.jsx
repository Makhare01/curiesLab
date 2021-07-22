import React from "react";

// Components
import { Switch, Route } from "react-router-dom";
import Boxes from "./Boxes";
import MainPageSwiper from "./mainPageSwiper";
import About from "./About";
import Team from "./Team";
import News from "./News";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPageSwiper active="1" />
      </Route>
      <Route exact path="/boxes">
        <Boxes active="1" />
      </Route>
      <Route exact path="/about-us">
        <About active="1" />
      </Route>
      <Route exact path="/team">
        <Team active="1" />
      </Route>

      <Route exact path="/news">
        <News active="1" />
      </Route>
    </Switch>
  );
};

export default Main;
