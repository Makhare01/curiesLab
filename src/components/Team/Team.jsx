import React from "react";
import NavBar from "../NavBar";
import ContactNavbar from "./../ContactNavbar";

import { TeamContainerStyle } from "./Team.style";

const Team = (props) => {
  return (
    <>
      <NavBar index={props.active}></NavBar>
      <TeamContainerStyle></TeamContainerStyle>
      <ContactNavbar></ContactNavbar>
    </>
  );
};

export default Team;
