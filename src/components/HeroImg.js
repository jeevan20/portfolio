import "./styles/HeroImgStyles.css";
import IntoImg from "../assets/intro-bg.jpg";
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntoImg} alt="Intro-Img" />
      </div>
      <div className="content">
        <div>
          <h2>HI, I'M A JEEVAN</h2>
          <h1>Full-stack Developer</h1>
          <div>
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/Contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
        {/* <div className="pro_pic">
          <img src="" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default HeroImg;
