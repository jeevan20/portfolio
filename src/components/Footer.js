import "./styles/FooterStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{
                  color: "#735dde",
                  marginRight: "2rem",
                }}
              />
              Madurai
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{
                  color: "#735dde",
                  marginRight: "2rem",
                }}
              />
              34004014040
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{
                  color: "#735dde",
                  marginRight: "2rem",
                }}
              />
              sjeevankumarjk@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Lorem </h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="social">
            <Link to="https://github.com/jeevan20">
              <FaGithub
                size={30}
                style={{
                  color: "#222",
                  marginRight: "2rem",
                }}
              />
            </Link>
            <Link to="">
              <FaInstagram
                size={30}
                style={{
                  color: "#d62976",
                  marginRight: "2rem",
                }}
              />
            </Link>
            <Link to="">
              <FaLinkedin
                size={30}
                style={{
                  color: "#0072b1",
                  marginRight: "2rem",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
