import styled from "styled-components";

export const NavbarStyle = styled.div`
  width: 90%;
  height: 60px;
  position: sticky;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 20px;
  z-index: 100;
  display: flex;
  align-items: center;
  /* background-color: red; */

  @media screen and (max-width: 830px) {
    top: 10px;
    justify-content: space-between;
    height: 40px;
  }
`;

export const NavbarLogoDivStyle = styled.div`
  width: 100%;
  max-width: 150px;
  height: 100%;
`;

export const NavbarLogoStyle = styled.img`
  height: 100%;
`;

export const NavLinkDivStyle = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  /* border: solid 1px green; */
  margin: auto;

  @media screen and (max-width: 830px) {
    display: none;
  }
`;

// export const NavbarContactStyle = styled.button`
//   width: 150px;
//   height: 50px;
//   padding-top: 5px;
//   /* background-color: #f4c5b5; */
//   background-color: #f25d2a;
//   border: none;
//   float: right;
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     background-color: #f33e00;
//   }

//   @media screen and (max-width: 830px) {
//     display: none;
//   }
// `;

// export const NavbarContactResponsiveStyle = styled.button`
//   width: 150px;
//   height: 50px;
//   padding-top: 5px;
//   /* background-color: #f4c5b5; */
//   background-color: white;
//   border: none;
//   /* float: right; */
//   cursor: pointer;
//   transition: 0.3s;

//   /* &:hover {
//     background-color: #f33e00;
//   } */
// `;

// export const NavbarContactLabelStyle = styled.label`
//   line-height: 50px;
//   font-size: 18px;
//   font-weight: bold;
//   font-family: TBC Contractica CAPS Black;
//   cursor: pointer;
//   color: white;

//   @media screen and (max-width: 830px) {
//     color: #f33e00;
//   }
// `;

export const NavbarNavlinkUlStyle = styled.ul`
  width: auto;
  height: auto;
  display: flex;
  list-style: none;
  margin-left: 0px;
  padding: 0px;
  /* border: solid 1px red; */
`;

export const NavbarNavlinkLiStyle = styled.li`
  width: 33.3%;
  font-family: TBC Contractica CAPS Black;
  padding-top: 6px;
  margin: auto;
  /* border: solid 1px pink; */
  color: #261f63;
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 830px) {
    width: 100%;
    font-size: 24px;
    margin: 50px 0px 50px 0px;
  }

  @media (max-width: 600px) and (min-width: 560px) {
    width: 100%;
    font-size: 24px;
    margin: 25px 0px 25px 0px;
  }
`;

export const NavbarResponsiveBurgerStyle = styled.i`
  font-size: 30px;
  /* color: #f33e00; */
  color: white;
  cursor: pointer;

  @media screen and (min-width: 830px) {
    display: none;
  }
`;

export const NavbarLangChangeDivStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  /* display: block; */

  @media screen and (max-width: 830px) {
    display: none;
  }
`;

export const NavbarLangChangeLabelStyle = styled.p`
  position: relative;
  top: 3px;
  font-size: 14px;
  font-family: TBC Contractica CAPS;
  cursor: pointer;

  @media screen and (max-width: 830px) {
    color: white;
  }
`;

export const NavbarLangChangeResponsiveDivStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  width: 80px;
  margin: auto;

  @media screen and (min-width: 830px) {
    display: none;
  }
`;
