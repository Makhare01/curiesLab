import React, { useState } from "react";
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
  NavbarLangChangerStyle,
  NavbarLangChangerLabelStyle,
} from "./NavBar.style";
import logo from "../img/clip-402.png";

const NavBar = (props) => {
  const [lang, setLang] = useState(false);
  const handelMenu = () => {
    const dots = document.getElementById("fp-nav");

    const check = document.getElementById("active");
    const select = document.getElementById("app-cover");
    console.log(select);

    if (dots) {
      if (check.checked === true) {
        dots.style.display = "block";
      } else {
        dots.style.display = "none";
      }
    }

    if (select) {
      if (check.checked === true) {
        select.style.display = "block";
      } else {
        select.style.display = "none";
      }
    }
  };

  const handleLang = (e) => {
    if (e == true) {
      localStorage.setItem("lang", "EN");
    } else {
      localStorage.setItem("lang", "GE");
    }
    setLang(true);
    console.log(localStorage.getItem("lang"));
  };
  return (
    <NavbarStyle>
      <NavbarLogoDivStyle>
        <NavLink className="navbar-navlink" to="/">
          <NavbarLogoStyle src={logo} />
        </NavLink>
      </NavbarLogoDivStyle>
      <NavLinkDivStyle>
        <NavbarNavlinkUlStyle>
          <NavbarNavlinkLiStyle>
            <NavLink
              className={
                props.index === 1
                  ? "navbar-navlink navbar-active"
                  : "navbar-navlink"
              }
              to="/boxes"
            >
              {localStorage.getItem("lang") === "GE"
                ? "სამეცნიერო ყუთები"
                : localStorage.getItem("lang") === "EN" && "Boxes"}
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarNavlinkLiStyle>
            <NavLink
              className={
                props.index === 2
                  ? "navbar-navlink navbar-active"
                  : "navbar-navlink"
              }
              to="/about-us"
            >
              ჩვენს შესახებ
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarNavlinkLiStyle>
            <NavLink
              className={
                props.index === 3
                  ? "navbar-navlink navbar-active"
                  : "navbar-navlink"
              }
              to="/team"
            >
              გუნდი
            </NavLink>
          </NavbarNavlinkLiStyle>
        </NavbarNavlinkUlStyle>
      </NavLinkDivStyle>
      {/* <NavbarContactStyle>
        <NavbarContactLabelStyle>კონტაქტი</NavbarContactLabelStyle>
      </NavbarContactStyle> */}
      <label class="language-switcher">
        <input
          onChange={(e) => handleLang(e.target.checked)}
          type="checkbox"
          id="lang-switcher"
        />
        <span class="slider round"></span>
        <span class="select-fr">GE</span>
        <span class="select-en">EN</span>
      </label>

      <input type="checkbox" id="active"></input>
      <label htmlFor="active" className="menu-btn">
        {/* <i className="fas fa-bars"></i> */}
        <NavbarResponsiveBurgerStyle
          onClick={handelMenu}
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
          {/* <NavbarContactResponsiveStyle>
            <NavbarContactLabelStyle>კონტაქტი</NavbarContactLabelStyle>
          </NavbarContactResponsiveStyle> */}

          {/* <li>
            <a href="#">About</a>
          </li> */}
        </ul>
      </div>
    </NavbarStyle>
  );
};

export default NavBar;
