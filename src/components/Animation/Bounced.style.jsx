import styled from "styled-components"

export const BouncedDivStyle = styled.div`
  width: 150px;
  height: 170px;
  /* border: solid 1px red; */
  position: absolute;
  /* bottom: 40%; */
  /* left: 10%; */
  z-index: 1;
  animation-name: bounce-1;
  animation-timing-function: linear;
  animation-duration: 5s;
  animation-iteration-count: infinite;


  @keyframes bounce-1 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }

  @media screen and (max-width: 800px)  {
    display: none;
  }

`;

export const BouncedbubbleDiv = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;

  @media screen and (max-width: 800px)  {
    display: none;
  }
`;

export const BouncedbubbleImg = styled.img`
  width: 100%;
`;

export const BouncedBubbleImgText = styled.p`
  position: absolute;
  z-index: 2;
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  color: #222;
  text-align: center;
  /* border: solid 1px red; */
  top: -8px;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
`;

export const BouncedImgStyle = styled.img`
  width: 60%;
  position: absolute;
  bottom: 0px;
  transform: rotate(-5deg);
`;
