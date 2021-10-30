import styled from "styled-components";

export const NewsTitleDiv = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 100px;
  max-width: 1400px;
`

export const NewsHeaderStyle = styled.h1`
  font-size: 36px;
  font-family: TBC Contractica CAPS;
  color: #261f63;

  @media (max-width: 620px) {
    font-size: 30px;
    text-align: center;
  }
`

export const NewsContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  margin-bottom: 200px;
  /* transition: 0.3s; */

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
