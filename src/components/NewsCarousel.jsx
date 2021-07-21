import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useMediaQuery } from "react-responsive";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// or
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
// or
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

import { SplideSlideDivStyle } from "./NewsCarousel.style";

const NewsCarousel = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  console.log(isTabletOrMobile ? "yes" : "no");

  const primaryOptions = {
    type: "loop",
    width: 600,
    // autoWidth: true,
    height: 600,
    arrows: false,
    perPage: 1.5,
    perMove: 1,
    autoplay: true,
    pagination: true,
    focus: "center",
    cover: true,
    padding: "20px",

    breakpoints: {
      600: {
        width: 300,
        height: 320,
        perPage: 1,
        perMove: 1,
        gap: "2rem",
      },
    },
  };

  // const secondaryOptions = {
  //   type: "slide",
  //   rewind: true,
  //   width: 800,
  //   gap: "1rem",
  //   pagination: false,
  //   fixedWidth: 110,
  //   fixedHeight: 70,
  //   cover: true,
  //   focus: "center",
  //   isNavigation: true,
  //   updateOnMove: true,
  // };
  return (
    <Splide options={primaryOptions}>
      <SplideSlide>
        <SplideSlideDivStyle>1</SplideSlideDivStyle>
      </SplideSlide>
      <SplideSlide>
        <SplideSlideDivStyle></SplideSlideDivStyle>
      </SplideSlide>
      <SplideSlide>
        <SplideSlideDivStyle></SplideSlideDivStyle>
      </SplideSlide>
    </Splide>
  );
};

export default NewsCarousel;
