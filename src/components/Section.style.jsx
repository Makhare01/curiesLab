import styled from "styled-components";

// First Section
export const FirstSectionTextDivStyle = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  /* border: solid 1px green; */
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Ipad Pro */
  @media screen and (max-width: 1024px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;
  }

  /* Mobile Rotate */
  @media (max-width: 830px) and (max-height: 420px) {
    top: 0%;
    height: 100% !important;
    width: 50% !important;
  }

  /* Mobile */
  @media (max-width: 830px) and (min-height: 420px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;
  }

  /* Iphone X */
  @media screen and (max-width: 565px) {
    top: 40%;
    height: 70% !important;
    width: 100% !important;
  }
`;

export const FirstSectionTextAnimationDivStyle = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 400px;
  /* border: solid 1px purple; */
  position: absolute;

  @media screen and (min-width: 1025px) {
    right: 0px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    /* border: solid 1px red; */
    text-align: center;
    align-items: center;
  }
`;

export const FirstSectionTextStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-size: 14px;
  color: #55636e;
  width: 400px;
  position: absolute;
  left: 10%;
  top: 70%;

  @media (max-width: 830px) and (max-height: 420px) {
    font-size: 12px;
    left: 0%;
    text-align: center;
    /* border: solid 1px red; */
    width: 100%;
    top: 80%;
  }

  @media (max-width: 830px) and (min-height: 420px) {
    font-size: 12px;
    left: 0%;
    text-align: center;
    /* border: solid 1px red; */
    width: 100%;
    top: 70%;
  }
`;

export const FirstSectionImgDivStyle = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  /* border: solid 1px red; */

  /* Ipad Pro */
  @media screen and (max-width: 1024px) {
    height: 50% !important;
    width: 100% !important;
    top: 0%;
    justify-content: center;
  }

  /* Mobile Rotate */
  @media (max-width: 830px) and (max-height: 420px) {
    height: 100% !important;
    width: 50% !important;
    /* top: 0%; */
    justify-content: center;
  }

  /* Mobile */
  @media (max-width: 830px) and (min-height: 420px) {
    height: 50% !important;
    width: 100% !important;
    top: 0%;
    justify-content: center;
  }

  /* Iphone X */
  @media screen and (max-width: 376px) {
    height: 50% !important;
    width: 100% !important;
    /* top: 0%; */
    justify-content: center;
  }
`;

export const FirstSectionImgStyle = styled.img`
  width: 100%;
  max-width: 550px;
  left: 0px;
  top: 60px;
  /* border: solid 1px purple; */

  @media screen and (max-width: 1024px) {
    height: 100%;
    width: auto;
    top: 0px;
  }

  @media screen and (max-height: 750px) {
    height: 100%;
    width: auto;
    /* top: 0px; */
  }
`;

// Second Section --------------------------------------------------------------------------------------------------

export const SecondSectionTextDivStyle = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  /* border: solid 1px green; */
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Ipad Pro */
  @media screen and (max-width: 1024px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;
  }

  /* Mobile Rotate */
  @media (max-width: 830px) and (max-height: 420px) {
    top: 0%;
    height: 100% !important;
    width: 50% !important;
  }

  /* Mobile */
  @media (max-width: 830px) and (min-height: 420px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;
  }

  /* Iphone X */
  @media screen and (max-width: 565px) {
    top: 40%;
    height: 70% !important;
    width: 100% !important;
  }
`;

export const SecondSectionTextAnimationDivStyle = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  position: absolute;

  @media screen and (min-width: 1400px) {
    right: 80px;
  }

  @media screen and (min-width: 1025px) {
    right: 0px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const SecondSectionTitleStyle = styled.p`
  font-family: TBC Contractica CAPS Black;
  font-size: 40px;
  color: #261f63;
  border-bottom: solid 5px #c2d7e2;
  margin: 0px;

  @media screen and (max-width: 1024px) {
    display: block;
    font-size: 30px;
    width: 70%;
    text-align: center;
    margin: auto;
    margin-top: 30px;
  }

  @media (max-width: 600px) and (min-width: 550px) {
    display: block;
    font-size: 22px;
    width: 70%;
    /* margin-top: 30px; */
  }
`;

export const SecondSectionTextStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-size: 14px;
  color: #55636e;
  margin-top: 60px;

  /* @media screen and (max-width: 800px) {
    margin-top: 20px;
    text-align: center;
  } */

  @media (max-width: 1024px) {
    font-size: 12px;
    left: 0%;
    text-align: center;
    /* border: solid 1px red; */
    width: 100%;
    margin-top: 40px;
  }

  @media (max-width: 600px) and (min-width: 550px) {
    font-size: 10px;
    left: 0%;
    text-align: center;
    /* border: solid 1px red; */
    width: 100%;
    margin-top: 10px;
  }
`;

export const SecondSectionButtonStyle = styled.button`
  width: 250px;
  height: 55px;
  background: #f25d2a;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-top: 5px;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #f33e00;
  }

  @media screen and (max-width: 1024px) {
    display: block !important;
    margin: auto !important;
    margin-top: 40px !important;
  }

  @media (max-width: 600px) and (min-width: 550px) {
    margin-top: 10px !important;
    width: 200px;
    height: 45px;
  }
`;

export const SecondSectionButtonLabelStyle = styled.label`
  font-family: TBC Contractica CAPS;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  color: #ffffff;

  @media (max-width: 600px) and (min-width: 550px) {
    font-size: 14px;
  }
`;

export const SecondSectionImgDivStyle = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  /* border: solid 1px green; */

  /* @media screen and (max-width: 800px) {
    height: 50% !important;
    width: 100% !important;
    border: solid 1px black;
    top: 0%;
    align-items: center;
    justify-content: center;
  } */

  /* Ipad Pro */
  @media screen and (max-width: 1024px) {
    height: 50% !important;
    width: 100% !important;
    top: 0%;
    align-items: center;
    justify-content: center;
  }

  /* Mobile Rotate */
  @media (max-width: 830px) and (max-height: 420px) {
    height: 100% !important;
    width: 50% !important;
    align-items: center;
    justify-content: center;
  }

  /* Mobile */
  @media (max-width: 830px) and (min-height: 420px) {
    height: 50% !important;
    width: 100% !important;
    top: 0%;
    align-items: center;
    justify-content: center;
  }

  /* Iphone X */
  @media screen and (max-width: 376px) {
    height: 50% !important;
    width: 100% !important;
    /* top: 0%; */
    align-items: center;
    justify-content: center;
  }
`;

export const SecondSectionImgStyle = styled.img`
  width: 100%;
  max-width: 700px;
  left: 0px;
  /* border: solid 1px red; */

  @media screen and (max-width: 1024px) {
    height: 100%;
    width: auto;
  }

  @media (max-height: 600px) and (min-height: 450px) {
    height: 100%;
    width: auto;
    margin-top: -50px;
  }
`;

// Thirs Section --------------------------------------------------------------------------------------------------

export const ThirdSectionTextDivStyle = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  /* border: solid 1px green; */
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Ipad Pro */
  @media screen and (max-width: 1024px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;
  }

  /* Mobile Rotate */
  @media (max-width: 830px) and (max-height: 420px) {
    top: 0%;
    height: 100% !important;
    width: 50% !important;
  }

  /* Mobile */
  @media (max-width: 830px) and (min-height: 420px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;
  }

  /* Iphone X */
  @media screen and (max-width: 565px) {
    top: 40%;
    height: 70% !important;
    width: 100% !important;
  }
`;

export const ThirdSectionTextAnimationDivStyle = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  position: absolute;

  @media screen and (min-width: 1400px) {
    right: 80px;
  }

  @media screen and (min-width: 1025px) {
    right: 0px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const ThirdSectionTitleStyle = styled.label`
  font-family: TBC Contractica CAPS Black;
  font-size: 40px;
  color: #261f63;
  border-bottom: solid 5px #c2d7e2;
  margin: 0px;

  /* @media screen and (max-width: 800px), screen and (max-height: 812px) {
    display: block;
    font-size: 30px;
    width: 70%;
    text-align: center;
    margin: auto;
    margin-top: 30px;
  } */

  @media screen and (max-width: 1024px) {
    display: block;
    font-size: 30px;
    width: 70%;
    text-align: center;
    margin: auto;
    margin-top: 30px;
  }

  @media (max-width: 600px) and (min-width: 550px) {
    display: block;
    font-size: 22px;
    width: 70%;
    margin-top: 30px;
  }
`;

export const ThirdSectionTextStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-size: 14px;
  color: #55636e;
  margin-top: 60px;

  @media (max-width: 1024px) {
    font-size: 12px;
    left: 0%;
    text-align: center;
    /* border: solid 1px red; */
    width: 100%;
    margin-top: 40px;
  }

  @media (max-width: 600px) and (min-width: 550px) {
    font-size: 10px;
    left: 0%;
    text-align: center;
    /* border: solid 1px red; */
    width: 100%;
    margin-top: 30px;
  }
`;

export const ThirdSectionButtonStyle = styled.button`
  width: 250px;
  height: 55px;
  background: #f25d2a;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-top: 5px;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #f33e00;
  }

  @media screen and (max-width: 1024px) {
    display: block !important;
    margin: auto !important;
    margin-top: 100px !important;
  }

  @media (max-width: 600px) and (min-width: 550px) {
    margin-top: 10px !important;
    width: 200px;
    height: 45px;
    margin-top: 30px !important;
  }
`;

export const ThirdSectionButtonLabelStyle = styled.label`
  font-family: TBC Contractica CAPS;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* line-height: 29px; */
  text-align: center;
  cursor: pointer;
  color: #ffffff;

  @media (max-width: 600px) and (min-width: 550px) {
    font-size: 14px;
  }
`;

export const ThirdSectionImgDivStyle = styled.div`
  height: 100%;
  width: 50%;
  /* border: solid 1px grey; */
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;

  /* Ipad Pro */
  @media screen and (max-width: 1024px) {
    height: 50% !important;
    width: 100% !important;
    top: 0%;
    align-items: center;
    justify-content: center;
  }

  /* Mobile Rotate */
  @media (max-width: 830px) and (max-height: 420px) {
    height: 100% !important;
    width: 50% !important;
    align-items: center;
    justify-content: center;
  }

  /* Mobile */
  @media (max-width: 830px) and (min-height: 420px) {
    height: 50% !important;
    width: 100% !important;
    top: 0%;
    align-items: center;
    justify-content: center;
  }

  /* Iphone X */
  @media screen and (max-width: 376px) {
    height: 50% !important;
    width: 100% !important;
    /* top: 0%; */
    align-items: center;
    justify-content: center;
  }
`;

export const ThirdSectionImgStyle = styled.img`
  width: 100%;
  max-width: 700px;
  /* border: solid 1px purple; */
  left: 0px;

  @media screen and (max-width: 1024px) {
    height: 100%;
    width: auto;
    top: 0px;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

// Fourth Section --------------------------------------------------------------------------------------------------

export const FourthSectionTextDivStyle = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* Ipad Pro */
  @media screen and (max-width: 1024px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;
    justify-content: center;
  }

  /* Mobile Rotate */
  @media (max-width: 830px) and (max-height: 420px) {
    top: 0%;
    height: 100% !important;
    width: 50% !important;
  }

  /* Mobile */
  @media (max-width: 830px) and (min-height: 420px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;
  }

  /* Iphone X */
  @media screen and (max-width: 565px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;
  }

  /* Iphone X */
  @media screen and (max-width: 320px) {
    top: 70%;
    height: 30% !important;
    width: 100% !important;
  }
`;

export const FourthSectionTextAnimationDivStyle = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  position: absolute;
`;

export const FourthSectionTitleStyle = styled.p`
  font-family: TBC Contractica CAPS Black;
  font-size: 48px;
  color: #261f63;
  /* border-bottom: solid 5px #c2d7e2; */
  margin: 0px;
  border-bottom-style: solid;
  border-bottom-width: 5px;

  @media screen and (min-width: 800px) {
    border-image: linear-gradient(100deg, rgb(194,215,226), transparent) 1;
  }

  @media screen and (max-width: 1024px) {
    font-size: 36px;
    width: auto;
    text-align: center;
    margin: auto;
    margin-top: 30px;
    border-bottom: solid 5px #c2d7e2;;
    /* display: none; */
  }
`;

export const FourthSectionTextStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-size: 14px;
  color: #55636e;
  margin-top: 60px;

  @media screen and (max-width: 1024px)  {
    text-align: center;
  }
`;

export const FourthSectionButtonStyle = styled.button`
  width: 250px;
  height: 55px;
  background: #f25d2a;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-top: 8px;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #f33e00;
  }

  @media screen and (max-width: 1024px) {
    display: block !important;
    margin: auto !important;
    margin-top: 0px !important;
  }
`;

export const FourthSectionButtonLabelStyle = styled.label`
  font-family: TBC Contractica CAPS;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* line-height: 29px; */
  text-align: center;
  cursor: pointer;

  color: #ffffff;
`;

export const FourthSectionImgDivStyle = styled.div`
  height: 100%;
  width: 50%;
  /* border: solid 1px grey; */
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  /* Ipad Pro */
  @media screen and (max-width: 1024px) {
    height: 50% !important;
    width: 100% !important;
    top: 0%;
    align-items: center;
    justify-content: center;
  }

  /* Mobile Rotate */
  @media (max-width: 830px) and (max-height: 420px) {
    height: 100% !important;
    width: 50% !important;
    align-items: center;
    justify-content: center;
  }

  /* Mobile */
  @media (max-width: 830px) and (min-height: 420px) {
    height: 50% !important;
    width: 100% !important;
    top: 0%;
    align-items: center;
    justify-content: center;
  }

  /* Iphone X */
  @media screen and (max-width: 376px) {
    height: 50% !important;
    width: 100% !important;
    /* top: 0%; */
    align-items: center;
    justify-content: center;
  }
`;

export const FourthSectionImgStyle = styled.img`
  height: 100%;
  max-height: 80%;
  position: absolute;
`;

// Fifth Section ------------------------------------------------------------------------------------------------------

export const FifthSectionDivStyle = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FifthSectionContentDivStyle = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
  position: relative;
`;

export const FifthSectionContentTitleStyle = styled.p`
  font-size: 28px;
  color: grey;
  text-align: center;
`;

export const FifthSectionContentSubDivStyle = styled.div`
  width: 100%;
  height: 70%;
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 800px)  {
    flex-direction: column;
  }
`;

export const FifthSectionContentListStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FifthSectionContentListItemLeftStyle = styled.p`
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  color: #55636e;
  text-align: left;
  margin: 0;
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    color: #222;
  }

  @media screen and (max-width: 800px)  {
    text-align: center;
  }
`;
