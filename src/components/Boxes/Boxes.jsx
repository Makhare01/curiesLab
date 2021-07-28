import React from "react";
import NavBar from "../NavBar";
import Box from "./Box";

import {
  BoxesContainerStyle,
  BoxesTitleStyle,
  BoxesSelectDivStyle,
  BoxContainer,
} from "./Boxes.style";
import BoxesSelect from "./BoxesSelect";

const Boxes = () => {
  return (
    <>
      <NavBar></NavBar>
      <BoxesContainerStyle>
        <BoxesTitleStyle>აირჩიეთ კატეგორია</BoxesTitleStyle>
        <BoxesSelectDivStyle>
          <BoxesSelect></BoxesSelect>
        </BoxesSelectDivStyle>
        <BoxContainer>
          <span data-aos="fade-up">
            <Box />
          </span>
          <div data-aos="fade-up">
            <Box />
          </div>
          <div data-aos="fade-up">
            <Box />
          </div>
          <div data-aos="fade-up">
            <Box />
          </div>
          <div data-aos="fade-up">
            <Box />
          </div>
          <div data-aos="fade-up">
            <Box />
          </div>
          <div data-aos="fade-up">
            <Box />
          </div>
          <div data-aos="fade-up">
            <Box />
          </div>
          <div data-aos="fade-up">
            <Box />
          </div>
          <div data-aos="fade-up">
            <Box />
          </div>
          <div data-aos="fade-up">
            <Box />
          </div>
        </BoxContainer>
      </BoxesContainerStyle>
    </>
  );
};

export default Boxes;
