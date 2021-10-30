// @ts-ignore
import styled from "styled-components";

// @ts-ignore
export const NewsMainCardDivStyle = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  max-width: 1400px;
  display: grid;
  grid-row-gap: 40px;
  grid-template-columns: 60% 40%;

  @media (max-width: 950px) {
    grid-template-columns: 100%;
  }
`

// @ts-ignore
export const NewsMainCardImageStyle = styled.img`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`

// @ts-ignore
export const NewsMainCardDescriptionDivStyle = styled.div`
  padding: 20px;
  position: relative;
  min-height: 400px;
`

// @ts-ignore
export const NewsMainCardDateStyle = styled.div`
  font-size: 14px;
  font-family: TBC Contractica CAPS;
  color: #55636e;
`

// @ts-ignore
export const MewsMainCardTitleStyle = styled.p`
  font-size: 24px;
  font-family: TBC Contractica CAPS;
  color: #261f63;
`

// @ts-ignore
export const NewsMainCardDescriptionStyle = styled.p`
  font-size: 18px;
  font-family: TBC Contractica Regular;
  color: #55636e;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 12;
  overflow: hidden;
`

export const NewsMainCardReadMoreButtonStyle = styled.button`
  width: 200px;
  height: 50px;
  border: solid 1px white;
  position: absolute;
  bottom: 0px;
  background-color: transparent;
  right: 0;
  border: none;
  background: #8AD0CE;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  cursor: pointer;
  text-align: center;

  @media (max-width: 950px) {
    width: 100%;
  }
`

export const NewsMainCardReadMoreLabelStyle = styled.p`
  font-size: 18px;
  font-family: TBC Contractica Regular;
  /* font-family: 'Lato', sans-serif; */
  color: white;
  transition: 0.5s;

  &:hover {
    color: #55636e;
  }
`

export const NewsMainCardReadMoreArrowStyle = styled.i`
  float: right;
  margin-right: 5px;

  @media (max-width: 950px) {
    display: none;
  }
`
