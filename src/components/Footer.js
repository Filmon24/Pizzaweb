import React from "react";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook"  />
        <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" />
        <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
      </div>
      <p> &copy; 2021 pedrotechpizza.com</p>
    </div>
  );
}

export default Footer;
