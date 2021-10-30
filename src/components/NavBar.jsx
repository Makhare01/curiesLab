// @ts-nocheck
import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarStyle,
  NavbarLogoDivStyle,
  NavbarLogoStyle,
  NavLinkDivStyle,
  NavbarNavlinkUlStyle,
  NavbarNavlinkLiStyle,
  NavbarResponsiveBurgerStyle,
  NavbarLangChangeDivStyle,
  NavbarLangChangeLabelStyle,
  NavbarLangChangeResponsiveDivStyle,
} from "./NavBar.style";
import logo from "../img/curies-lab-logo.png";

import { useTranslation } from "react-i18next";

const NavBar = (props) => {
  const { t } = useTranslation();
  const handelMenu = () => {
    const dots = document.getElementById("fp-nav");

    const check = document.getElementById("active");
    const select = document.getElementById("app-cover");

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

  const handleLang = (lang) => {
    localStorage.setItem("lang", lang);

    window.location.reload();
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
              {t("BOXES")}
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarNavlinkLiStyle>
            <NavLink
              className={
                props.index === 4
                  ? "navbar-navlink navbar-active"
                  : "navbar-navlink"
              }
              to="/news"
            >
              {t("NEWS_NAVLINK")}
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
              {t("TEAM")}
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
              {t("ABOUT_US_NAVLINK")}
            </NavLink>
          </NavbarNavlinkLiStyle>
        </NavbarNavlinkUlStyle>
      </NavLinkDivStyle>
      <NavbarLangChangeDivStyle>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="globe"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          width="20"
          height="20"
          color="#261f63"
        >
          <path
            fill="currentColor"
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm193.2 152h-82.5c-9-44.4-24.1-82.2-43.2-109.1 55 18.2 100.2 57.9 125.7 109.1zM336 256c0 22.9-1.6 44.2-4.3 64H164.3c-2.7-19.8-4.3-41.1-4.3-64s1.6-44.2 4.3-64h167.4c2.7 19.8 4.3 41.1 4.3 64zM248 40c26.9 0 61.4 44.1 78.1 120H169.9C186.6 84.1 221.1 40 248 40zm-67.5 10.9c-19 26.8-34.2 64.6-43.2 109.1H54.8c25.5-51.2 70.7-90.9 125.7-109.1zM32 256c0-22.3 3.4-43.8 9.7-64h90.5c-2.6 20.5-4.2 41.8-4.2 64s1.5 43.5 4.2 64H41.7c-6.3-20.2-9.7-41.7-9.7-64zm22.8 96h82.5c9 44.4 24.1 82.2 43.2 109.1-55-18.2-100.2-57.9-125.7-109.1zM248 472c-26.9 0-61.4-44.1-78.1-120h156.2c-16.7 75.9-51.2 120-78.1 120zm67.5-10.9c19-26.8 34.2-64.6 43.2-109.1h82.5c-25.5 51.2-70.7 90.9-125.7 109.1zM363.8 320c2.6-20.5 4.2-41.8 4.2-64s-1.5-43.5-4.2-64h90.5c6.3 20.2 9.7 41.7 9.7 64s-3.4 43.8-9.7 64h-90.5z"
          ></path>
        </svg>
        <NavbarLangChangeLabelStyle>
          <span
            onClick={() => handleLang("GE")}
            className={localStorage.getItem("lang") === "GE" && "active-lang"}
          >
            GE
          </span>{" "}
          |{" "}
          <span
            onClick={() => handleLang("EN")}
            className={localStorage.getItem("lang") === "EN" && "active-lang"}
          >
            EN
          </span>
        </NavbarLangChangeLabelStyle>
      </NavbarLangChangeDivStyle>

      <input type="checkbox" id="active"></input>
      <label htmlFor="active" className="menu-btn">
        <NavbarResponsiveBurgerStyle
          onClick={handelMenu}
          className="fa fa-bars"
        ></NavbarResponsiveBurgerStyle>
      </label>
      <div className="wrapper">
        <ul>
          <NavbarNavlinkLiStyle>
            <NavLink className="navbar-navlink" to="/boxes">
              {t("BOXES")}
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarNavlinkLiStyle>
            <NavLink className="navbar-navlink" to="/boxes">
              {t("NEWS_NAVLINK")}
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarNavlinkLiStyle>
            <NavLink className="navbar-navlink" to="/team">
              {t("TEAM")}
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarNavlinkLiStyle>
            <NavLink className="navbar-navlink" to="/about-us">
              {t("ABOUT_US_NAVLINK")}
            </NavLink>
          </NavbarNavlinkLiStyle>
          <NavbarLangChangeResponsiveDivStyle>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="globe"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              width="20"
              height="20"
              color="#261f63"
              className="lang-svg"
            >
              <path
                fill="currentColor"
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm193.2 152h-82.5c-9-44.4-24.1-82.2-43.2-109.1 55 18.2 100.2 57.9 125.7 109.1zM336 256c0 22.9-1.6 44.2-4.3 64H164.3c-2.7-19.8-4.3-41.1-4.3-64s1.6-44.2 4.3-64h167.4c2.7 19.8 4.3 41.1 4.3 64zM248 40c26.9 0 61.4 44.1 78.1 120H169.9C186.6 84.1 221.1 40 248 40zm-67.5 10.9c-19 26.8-34.2 64.6-43.2 109.1H54.8c25.5-51.2 70.7-90.9 125.7-109.1zM32 256c0-22.3 3.4-43.8 9.7-64h90.5c-2.6 20.5-4.2 41.8-4.2 64s1.5 43.5 4.2 64H41.7c-6.3-20.2-9.7-41.7-9.7-64zm22.8 96h82.5c9 44.4 24.1 82.2 43.2 109.1-55-18.2-100.2-57.9-125.7-109.1zM248 472c-26.9 0-61.4-44.1-78.1-120h156.2c-16.7 75.9-51.2 120-78.1 120zm67.5-10.9c19-26.8 34.2-64.6 43.2-109.1h82.5c-25.5 51.2-70.7 90.9-125.7 109.1zM363.8 320c2.6-20.5 4.2-41.8 4.2-64s-1.5-43.5-4.2-64h90.5c6.3 20.2 9.7 41.7 9.7 64s-3.4 43.8-9.7 64h-90.5z"
              ></path>
            </svg>
            <NavbarLangChangeLabelStyle>
              <span
                onClick={() => handleLang("GE")}
                className={
                  localStorage.getItem("lang") === "GE" && "active-lang"
                }
              >
                GE
              </span>{" "}
              |{" "}
              <span
                onClick={() => handleLang("EN")}
                className={
                  localStorage.getItem("lang") === "EN" && "active-lang"
                }
              >
                EN
              </span>
            </NavbarLangChangeLabelStyle>
          </NavbarLangChangeResponsiveDivStyle>
        </ul>
      </div>
    </NavbarStyle>
  );
};

export default NavBar;
