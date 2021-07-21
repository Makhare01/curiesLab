import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarStyle,
  NavbarLogoDivStyle,
  NavbarLogoStyle,
  NavLinkDivStyle,
  NavbarContactStyle,
  NavbarNavlinkUlStyle,
  NavbarNavlinkLiStyle,
  NavbarContactResponsiveStyle,
  NavbarContactLabelStyle,
  NavbarResponsiveBurgerStyle,
} from "./NavBar.style";
import logo from "../img/clip-402.png";

const NavBar = () => {
  // const handelMenu = () => {
  //   console.log("work");
  // };
  return (
    <NavbarStyle>
      <NavbarLogoDivStyle>
        <NavbarLogoStyle src={logo} />
      </NavbarLogoDivStyle>
      <NavLinkDivStyle>
        <NavbarNavlinkUlStyle>
          <NavbarNavlinkLiStyle>
            <NavLink className="navbar-navlink" to="/boxes">
              სამეცნიერო ყუთები
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarNavlinkLiStyle>
            <NavLink className="navbar-navlink" to="/about-us">
              ჩვენს შესახებ
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarNavlinkLiStyle>
            <NavLink className="navbar-navlink" to="/team">
              გუნდი
            </NavLink>
          </NavbarNavlinkLiStyle>
        </NavbarNavlinkUlStyle>
      </NavLinkDivStyle>
      <NavbarContactStyle>
        <NavbarContactLabelStyle>კონტაქტი</NavbarContactLabelStyle>
      </NavbarContactStyle>

      <input type="checkbox" id="active"></input>
      <label for="active" className="menu-btn">
        {/* <i className="fas fa-bars"></i> */}
        <NavbarResponsiveBurgerStyle
          // onClick={handelMenu}
          className="fa fa-bars"
        ></NavbarResponsiveBurgerStyle>
      </label>
      <div className="wrapper">
        <ul>
          <NavbarNavlinkLiStyle>
            <NavLink className="navbar-navlink" to="/boxes">
              სამეცნიერო ყუთები
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarNavlinkLiStyle>
            <NavLink className="navbar-navlink" to="/about-us">
              ჩვენს შესახებ
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarNavlinkLiStyle>
            <NavLink className="navbar-navlink" to="/team">
              გუნდი
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarContactResponsiveStyle>
            <NavbarContactLabelStyle>კონტაქტი</NavbarContactLabelStyle>
          </NavbarContactResponsiveStyle>

          {/* <li>
            <a href="#">About</a>
          </li> */}
        </ul>
      </div>
    </NavbarStyle>
  );
};

export default NavBar;
