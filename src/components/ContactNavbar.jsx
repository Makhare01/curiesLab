import React from "react";
import {
  ContactNavbarDivStyle,
  ContactNavbarIconsDivStyle,
  ContactNavbarIconStyle,
  // ContactNavbarIconMesssageStyle,
} from "./ContactNavbar.style";

// import chatIcon from "../img/chat_message_icon.png";

const ContactNavbar = () => {
  return (
    <ContactNavbarDivStyle>
      <ContactNavbarIconsDivStyle>
        <a
          href="https://bit.ly/3BeA9vg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactNavbarIconStyle className="fab fa-facebook"></ContactNavbarIconStyle>
        </a>
        <ContactNavbarIconStyle
          style={{ marginLeft: "30px" }}
          className="fab fa-instagram"
        ></ContactNavbarIconStyle>
      </ContactNavbarIconsDivStyle>

      {/* <ContactNavbarIconsDivStyle>
        <ContactNavbarIconMesssageStyle src={chatIcon} />
      </ContactNavbarIconsDivStyle> */}
    </ContactNavbarDivStyle>
  );
};

export default ContactNavbar;
