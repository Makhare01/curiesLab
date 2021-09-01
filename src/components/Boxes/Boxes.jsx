import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Box from "./Box";
// import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
// import BoxImg from "../../../../server/public/images/1630332145-Box 2.png";

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
  baseURL: `http://127.0.0.1:8000/`,
});

// const accessToken = "11|wFv6uXBMVhVRdZyASwExXlnnteJJzHDjcULe2A0T";

// axios.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const Boxes = (props) => {
  const [boxes, setBoxes] = useState();

  useEffect(() => {
    api.get("/api/boxes").then((res) => {
      // console.log(res.data);
      setBoxes(res.data);
      console.log(res);
    });
  }, []);

  const register = async () => {
    let res = api.post("/register", {
      name: "Makhare",
      email: "maxare2016@gmail.com",
      password: "123456789",
      password_confirmation: "123456789",
    });

    axios.defaults.headers.common["X-CSRF-TOKEN"] = res.data;

    console.log(res);
  };

  const createBox = async () => {
    let res = api.post("/api/boxes", {
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
        </BoxesSelectDivStyle>
        <BoxContainer>
          {boxes &&
            boxes.map((box, index) => {
              return (
                <ScrollAnimation animateIn="FadeInUp" key={index}>
                  <Box
                    Img="../../../../server/public/images/1630343197-Box 3.png"
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
