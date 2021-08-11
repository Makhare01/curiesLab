import styled from "styled-components";

export const AboutContainerStyle = styled.div`
  width: 90%;
  height: calc(100vh - 130px);
  margin: auto;
  margin-top: 30px;
  display: flex;

  @media (max-width: 1100px) {
    display: block;
    position: relative;
  }
`;

// Left Side
export const AboutTextDivStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    width: 100%;
    height: 60%;
    position: absolute;
    top: 40%;
  }
`;

export const AboutUsTextSubDivStyle = styled.div`
  width: 100%;
  height: auto;
`;

export const AboutUsTitleStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-weight: bold;
  font-size: 55px;
  margin: 0;
  color: #7946d1;
  width: 250px;

  @media (max-width: 1100px) {
    font-size: 36px;
    text-align: center;
    width: 100%;
  }
`;

export const AboutUsDescriptionStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-weight: normal;
  font-size: 14px;
  margin-top: 50px;
  color: #55636e;

  @media (max-width: 1100px) {
    font-size: 12px;
    margin-top: 30px;
    text-align: center;
  }
`;

export const AboutUsButtonStyle = styled.button`
  width: 280px;
  height: 60px;
  border: none;
  background: #7946d1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 60px;
  padding-top: 8px;
  align-items: center;

  &:hover {
    background: #5b23aa;
  }

  @media (max-width: 1100px) {
    width: 240px;
    height: 50px;
    display: block;
    margin: auto;
  }
`;

export const AboutUsButtonLabelStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin: 0;

  color: #ffffff;

  @media (max-width: 1100px) {
    font-size: 18px;
  }
`;

// Right Side
export const AboutImageDivStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    width: 100%;
    height: 40%;
    position: absolute;
    top: 0%;
  }
`;

export const AboutUsImgStyle = styled.img`
  width: 100%;
  max-height: 100%;

  @media (max-width: 1100px) {
    height: 100%;
    width: auto;
  }
`;
