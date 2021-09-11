import styled from "styled-components";

export const NewsCardDivStyle = styled.div`
  width: 100%;
  /* height: 100%; */
  /* border: solid 1px green; */
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  position: absolute;
  height: calc(100% - 200px);
  top: 0px;
  display: flex;

  @media screen and (max-width: 830px) {
    /* grid-template-columns: repeat(1, 1fr); */
    display: block;
  }
`;

export const NewsCardLeftDivStyle = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: lightblue; */
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 830px) {
    width: 100%;
    height: 70%;
    position: absolute;
    top: 30%;
    border: solid 1px green;
  }

  @media screen and (max-width: 500px) {
    height: 88%;
  }
`;

export const NewsCardLeftInsideDivStyle = styled.div`
  /* border: solid 1px red; */
  width: 80%;
`;

export const NewsCardLeftInsideDescriptionDivStyle = styled.div`
  /* max-height: 100%; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;

  @media screen and (max-width: 830px) {
    -webkit-line-clamp: 15;
  }

  @media screen and (max-width: 500px) {
    -webkit-line-clamp: 10;
  }
`;

export const NewsCardLeftTitleStyle = styled.p`
  font-size: 32px;
  color: #261f63;
  font-family: TBC Contractica CAPS Black;

  @media screen and (max-width: 830px) {
    font-size: 24px;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const NewsCardDescriptionStyle = styled.p`
  font-size: 16px;
  color: #55636e;
  font-family: TBC Contractica CAPS regular;

  @media screen and (max-width: 830px) {
    text-align: center;
    text-overflow: ellipsis;
  }
`;

export const NewsCardreadMoreButtonStyle = styled.button`
  width: 200px;
  height: 60px;
  cursor: pointer;
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

  @media screen and (max-width: 830px) {
    display: block;
    margin: auto;
  }
  /* border: solid 1px red; */
`;

export const NewsCardReadMoreLabelStyle = styled.p`
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

export const NewsCardRightDivStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-color: lightcoral; */

  @media screen and (max-width: 830px) {
    width: 100%;
    height: 30%;
    position: absolute;
    top: 0;
    border: solid 1px red;
  }
`;

export const NewsCardRightImgStyle = styled.img`
  width: 100%;

  @media screen and (max-width: 830px) {
    height: 100%;
    width: auto;
  }
`;
