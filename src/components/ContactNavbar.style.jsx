import styled from "styled-components";

export const ContactNavbarDivStyle = styled.div`
  width: 90%;
  /* max-width: 1920px; */
  height: 30px;
  position: sticky;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 20px;
  /* border: solid 1px green; */
  z-index: 100;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;

  @media screen and (max-width: 830px) {
    display: none;
  }
`;

export const ContactNavbarIconsDivStyle = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ContactNavbarIconStyle = styled.i`
  color: #261f63;
  font-size: 26px;
  cursor: pointer;
`;

export const ContactNavbarIconMesssageStyle = styled.img`
  width: 43px;
  cursor: pointer;
`;
