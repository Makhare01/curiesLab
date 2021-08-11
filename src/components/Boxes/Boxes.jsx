import React, { useState, useEffect } from "react";
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

// Axios
import axios from "axios";

const api = axios.create({
  baseURL: `http://127.0.0.1:8000/api/`,
});

const Boxes = (props) => {
  const [boxes, setBoxes] = useState();

  useEffect(() => {
    api.get("/boxes").then((res) => {
      // console.log(res.data);
      setBoxes(res.data);
    });
  }, []);

  const createBox = async () => {
    let res = api.post("/boxes", {
      title: "Box 3",
      price: "40",
      description: "lorem ipsum 3",
      category: "C3",
      file_path: "/file/photo3.png",
    });

    console.log(res);
  };

  return (
    <>
      {console.log("box = ", boxes)}
      <NavBar className={"navbar-style"} index={props.active}></NavBar>
      <BoxesContainerStyle>
        <BoxesTitleStyle>აირჩიეთ კატეგორია</BoxesTitleStyle>
        <BoxesSelectDivStyle>
          <BoxesSelect></BoxesSelect>
          <button onClick={createBox}>Add</button>
        </BoxesSelectDivStyle>
        <BoxContainer>
          {boxes &&
            boxes.map((box) => {
              return (
                <ScrollAnimation animateIn="FadeInUp">
                  <Box
                    Img={box1}
                    Title={box.title}
                    Description={
                      box.description +
                      "klsjdlksj kjadas adjoiasd ooajsdo asjdkj"
                    }
                    Price={box.price + "₾"}
                  />
                </ScrollAnimation>
              );
            })}
        </BoxContainer>
      </BoxesContainerStyle>
    </>
  );
};

export default Boxes;
