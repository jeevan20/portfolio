import { Link } from "react-router-dom";
import "./styles/AboutContentStyles.css";
import mern from "../assets/mern.png";
import mern2 from "../assets/mern-react.png";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          Im a Full-stack MERN Developer. I create responsive Website and
          WebApp.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={mern} alt="react-img" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={mern2} alt="react-img" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
