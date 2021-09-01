import styled from "styled-components";

export const TeamContainerStyle = styled.div`
  width: 90%;
  height: calc(100vh - 170px);
  margin: auto;
  margin-top: 30px;
  /* border: solid 1px red; */
`;

export const TeamTitleStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-top: 80px;
  color: #55636e;

  @media (max-width: 800px) {
    margin-top: 0px;
  }
`;

export const TeamCardsDivStyle = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  align-items: center;
  justify-items: center;
  margin-top: 80px;
  /* border: solid 1px red; */

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TeamCardDivStyle = styled.div`
  width: 330px;
  height: 470px;
  position: relative;
  background: #edf4f7;
  box-shadow: 4px 4px 4px rgba(147, 146, 146, 0.25);
`;

export const TeamCardImgStyle = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: block;
  margin: auto;
  margin-top: 20px;
`;

export const TeamCardNameStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-weight: bold;
  font-size: 24px;
  text-align: center;

  color: #55636e;
`;

export const TeamCardPositionTextStyle = styled.p`
  font-family: TBC Contractica CAPS;
  font-weight: normal;
  font-size: 14px;
  text-align: center;

  color: #55636e;
`;

export const TeamCardDescriptionStyle = styled.p`
  font-family: TBC Contractica CAPS regular;
  font-size: 12px;
  text-align: center;
  padding: 0px 10px 0px 10px;

  color: #55636e;
`;

export const TeamCardSocialDivStyle = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0px;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 30px;
`;

export const TeamCardSocialIconStyle = styled.i`
  font-size: 28px;
  color: #55636e;
  cursor: pointer;
`;
