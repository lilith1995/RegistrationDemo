import React, { Component } from "react";

import "./Footer.scss";

import clubhouse from "../../assets/icons/clubhouse.png";
import tiktok from "../../assets/icons/tiktok.png";
import twitter from "../../assets/icons/twitter.jpg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-body">
            <div className="footer-menu">
              <ul>
                <li>Blog</li>
                <li>Community</li>
                <li>Join and follow us</li>
              </ul>
            </div>
            <div className="media-platforms">
              <a href="https://clubhouse.io/" target="_blank" rel="noreferrer">
                <img src={clubhouse} alt="Clubhouse" />
              </a>
              <a
                href="https://www.tiktok.com/en/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={tiktok} alt="TikTok" />
              </a>
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
