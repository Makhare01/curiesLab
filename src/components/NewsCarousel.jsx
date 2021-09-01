import React from "react";
import { useMediaQuery } from "react-responsive";

const NewsCarousel = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  console.log(isTabletOrMobile ? "yes" : "no");

  return <></>;
};

export default NewsCarousel;
