import styled from "styled-components";

export const MainPageContentDivStyle = styled.div`
  position: absolute;
  width: 90%;
  max-width: 1920px;
  height: calc(100% - 200px);
  /* border: solid 1px yellow; */
  /* position: absolute; */
  top: calc(50% - 60px);
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 830px) {
    height: calc(100% - 130px);
    top: calc(50% - 30px);
  }

  /* @media (max-width: 600px) and (min-width: 550px) {
    height: calc(100% - 100px);
    top: calc(50% - 30px);
  } */
`;
