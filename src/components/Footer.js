import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://github.com/Adhiraj582' target="_blank">
          <GitHubIcon />
        </a>
      </div>
      <p>&copy; 2022 Nothing :D</p>
    </div>
  );
}

export default Footer;
