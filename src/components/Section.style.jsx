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

  @media screen and (max-width: 800px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;
  }

  @media screen and (max-width: 400px) {
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

  @media screen and (max-width: 800px) {
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

  @media screen and (max-width: 800px) {
    font-size: 12px;
    left: 0%;
    text-align: center;
    /* border: solid 1px red; */
    width: 100%;
    top: 90%;
  }
`;

export const FirstSectionImgDivStyle = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 50% !important;
    width: 100% !important;
    top: 0%;
    justify-content: center;
  }

  /* @media screen and (max-width: 400px) {
    height: 40% !important;
    width: 100% !important;
    top: 0%;
    justify-content: center;
  } */
`;

export const FirstSectionImgStyle = styled.img`
  width: 100%;
  max-width: 700px;
  left: 0px;
  top: 60px;
  /* border: solid 1px red; */

  @media screen and (max-width: 800px) {
    height: 100%;
    width: auto;
    top: 0px;
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

  @media screen and (max-width: 800px) {
    top: 50%;
    height: 70% !important;
    width: 100% !important;
  }
`;

export const SecondSectionTextAnimationDivStyle = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  position: absolute;
`;

export const SecondSectionTitleStyle = styled.p`
  font-family: TBC Contractica CAPS Black;
  font-size: 40px;
  color: #261f63;
  border-bottom: solid 5px #c2d7e2;
  margin: 0px;

  @media screen and (max-width: 800px) {
    display: block;
    font-size: 30px;
    width: 70%;
    text-align: center;
    margin: auto;
    margin-top: 30px;
  }
`;

export const SecondSectionTextStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-size: 14px;
  color: #55636e;
  margin-top: 60px;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
    text-align: center;
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

  @media screen and (max-width: 800px) {
    display: block !important;
    margin: auto !important;
    margin-top: 40px !important;
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
`;

export const SecondSectionImgDivStyle = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 50% !important;
    width: 100% !important;
    /* border: solid 1px black; */
    top: 0%;
    align-items: center;
    justify-content: center;
  }
`;

export const SecondSectionImgStyle = styled.img`
  width: 100%;
  max-width: 700px;
  left: 0px;
  /* border: solid 1px red; */

  @media screen and (max-width: 800px) {
    height: 100%;
    width: auto;
    margin-top: -50px;
  }
`;

// Thirs Section

export const ThirdSectionTextDivStyle = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  /* border: solid 1px green; */
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* @media screen and (max-width: 800px) {
    top: 40%;
    height: 70% !important;
    width: 100% !important;
  } */

  @media screen and (max-width: 800px), screen and (max-height: 812px) {
    top: 50%;
    height: 50% !important;
    width: 100% !important;

    /* border: solid 1px red; */
  }

  @media screen and (max-height: 568px) {
    top: 40%;
    height: 50% !important;
    width: 100% !important;
    /* border: solid 1px green; */
  }
`;

export const ThirdSectionTextAnimationDivStyle = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  position: absolute;
`;

export const ThirdSectionTitleStyle = styled.label`
  font-family: TBC Contractica CAPS Black;
  font-size: 40px;
  color: #261f63;
  border-bottom: solid 5px #c2d7e2;
  margin: 0px;

  @media screen and (max-width: 800px) {
    display: block;
    font-size: 30px;
    width: 70%;
    text-align: center;
    margin: auto;
    margin-top: 30px;
  }
`;

export const ThirdSectionTextStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-size: 14px;
  color: #55636e;
  margin-top: 60px;

  @media screen and (max-width: 800px) {
    text-align: center;
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

  /* @media screen and (max-width: 800px) {
    display: block !important;
    margin: auto !important;
    margin-top: 40px !important;
  } */

  @media screen and (max-width: 800px), screen and (max-height: 812px) {
    display: block !important;
    margin: auto !important;
    margin-top: 100px !important;
  }

  @media screen and (max-height: 568px) {
    display: block !important;
    margin: auto !important;
    margin-top: 40px !important;
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
`;

export const ThirdSectionImgDivStyle = styled.div`
  height: 100%;
  width: 50%;
  /* border: solid 1px grey; */
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 40% !important;
    width: 100% !important;
    /* border: solid 1px black; */
    top: 0%;
    align-items: center;
    justify-content: center;
  }
`;

export const ThirdSectionImgStyle = styled.img`
  width: 100%;
  max-width: 700px;
  /* border: solid 1px purple; */
  left: 0px;

  @media screen and (max-width: 800px) {
    height: 100%;
    width: auto;
    top: 0px;
  }
`;

// Fourth Section -------------------------------------------------------------------------------------------------

export const FourthSectionTextDivStyle = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  /* border: solid 1px green; */
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px), screen and (max-height: 812px) {
    top: 100%;
    height: 20% !important;
    width: 100% !important;
    /* border: solid 1px green; */
  }

  @media screen and (max-height: 568px) {
    top: 110%;
    height: 20% !important;
    width: 100% !important;
    /* border: solid 1px red; */
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
  border-bottom: solid 5px #c2d7e2;
  margin: 0px;

  @media screen and (max-width: 800px) {
    font-size: 36px;
    width: auto;
    text-align: center;
    margin: auto;
    margin-top: 30px;
    display: none;
  }
`;

export const FourthSectionTextStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-size: 14px;
  color: #55636e;
  margin-top: 60px;
`;

export const FourthSectionButtonStyle = styled.button`
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

  @media screen and (max-width: 800px) {
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

  @media screen and (max-width: 800px) {
    height: 90% !important;
    width: 100% !important;
    /* border: solid 1px black; */
    top: 0%;
    align-items: center;
    justify-content: center;
  }
`;

// export const FourthSectionImgStyle = styled.img`
//   width: 100%;
//   border: solid 1px purple;
//   position: absolute;
//   left: 0px;
// `;
