import React from "react";
import NavBar from "../NavBar";
import Box from "./Box";
// import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import {
  BoxesContainerStyle,
  BoxesTitleStyle,
  BoxesSelectDivStyle,
  BoxContainer,
} from "./Boxes.style";
import BoxesSelect from "./BoxesSelect";

// Images
import box1 from "../../img/box.png";

const Boxes = (props) => {
  return (
    <>
      <NavBar index={props.active}></NavBar>
      <BoxesContainerStyle>
        <BoxesTitleStyle>აირჩიეთ კატეგორია</BoxesTitleStyle>
        <BoxesSelectDivStyle>
          <BoxesSelect></BoxesSelect>
        </BoxesSelectDivStyle>
        <BoxContainer>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="FadeInUp">
            <Box
              Img={box1}
              Title="Box 1"
              Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              Price="35₾"
            />
          </ScrollAnimation>
        </BoxContainer>
      </BoxesContainerStyle>
    </>
  );
};

export default Boxes;
