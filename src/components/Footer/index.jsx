import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="links-container">
          <ul className="links-list">
            <li className="link-item">
              <a href="#">Contact</a>
            </li>
            <li className="link-item">
              <span>|</span>
            </li>
            <li className="link-item">
              <a href="#">CGU</a>
            </li>
            <li className="link-item">
              <span>|</span>
            </li>
            <li className="link-item">
              <a href="#">CGV</a>
            </li>
            <li className="link-item">
              <span>|</span>
            </li>
            <li className="link-item">
              <a href="#">Copyright</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
