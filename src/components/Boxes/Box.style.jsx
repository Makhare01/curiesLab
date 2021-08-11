import styled from "styled-components";

export const BoxDivStyle = styled.div`
  width: 250px;
  height: 355px;
  background: white;
  border: solid 1px #ededed;
  position: relative;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 50px 0px rgb(0 0 0 / 20%);
  }
`;

export const BoxImageStyle = styled.img`
  width: 100%;
  max-width: 180px;
  height: auto;
  display: block;
  margin: auto;
  margin-top: 30px;
  /* border: solid 1px red; */
  /* margin-left: 30px; */
`;

export const BoxTitleStyle = styled.p`
  font-size: 24px;
  font-family: TBC Contractica CAPS Black;
  text-align: center;
  color: #261f63;
`;

export const BoxDescriptionStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  width: 80%;
  margin: auto;

  color: #55636e;
`;

export const BoxButtonStyle = styled.button`
  width: 160px;
  height: 35px;
  border: none;
  background: #f25d2a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: block;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  bottom: 15px;
  margin: auto;
  left: 0;
  right: 0;

  &:hover {
    background: #f33e00;
  }
`;

export const BoxButtonLabelStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: center;

  color: #ffffff;
`;

export const BoxPriceDivStyle = styled.div`
  width: 0;
  height: 0;
  border-top: 60px solid #f25d2a;
  border-left: 60px solid transparent;
  position: absolute;
  right: 0px;
  display: flex;
`;

export const BoxPriceLabelStyle = styled.label`
  font-family: TBC Contractica CAPS;
  font-weight: bold;
  font-size: 14px;
  /* text-align: center; */
  position: absolute;
  right: 6px;
  top: 12px;
  /* border: solid 1px red; */

  color: white;
`;
