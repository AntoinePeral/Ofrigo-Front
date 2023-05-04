import React from "react";

import "./style.scss";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}
    >
      <div className="footer-container">
        <div className="links-container">
          <ul className="links-list">
            <li className="link-item">
              <a href="/contact">Contact</a>
            </li>
            <li className="link-item">
              <span>|</span>
            </li>
            <li className="link-item">
              <a href="/CGU">CGU</a>
            </li>
            <li className="link-item">
              <span>|</span>
            </li>
            <li className="link-item">
              <a href="/CGV">CGV</a>
            </li>
            <li className="link-item">
              <span>|</span>
            </li>
            <li className="link-item">
              <a href="/Copyright">Copyright</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
