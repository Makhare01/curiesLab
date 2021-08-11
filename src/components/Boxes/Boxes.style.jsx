import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  /* border: solid 1px red; */
  margin-top: 150px;
  display: grid;
  grid-row-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  /* transition: 0.3s; */

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BoxesContainerStyle = styled.div`
  width: 90%;
  height: auto;
  min-height: 100vh;
  margin: auto;
  /* border: solid 1px red; */
  margin-top: 50px;
`;

export const BoxesTitleStyle = styled.p`
  text-align: center;
  font-family: TBC Contractica CAPS;
  font-size: 36px;
  color: #55636e;
  margin-top: 100px;

  @media (max-width: 800px) {
    margin-top: 30px;
  }
`;

export const BoxesSelectDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxesSelectTagStyle = styled.select`
  border: none;
  width: 300px;
  height: 50px;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-family: TBC Contractica CAPS Regular;
  font: 28px;
  padding-top: 8px;
  padding-left: 20px;
  color: #55636e;

  &:focus {
    outline: 0;
  }
`;

export const BoxesOptionTagStyle = styled.option`
  font-family: TBC Contractica CAPS;
  font: 22px;
  padding-top: 5px;
  height: 20px !important;
  border: solid 1px red;
  background-color: red;
  padding-left: 5px !important;
`;
