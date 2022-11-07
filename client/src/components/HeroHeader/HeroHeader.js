import React from "react";
import "./HeroHeader.css";
import LandingArt from "../../images/LandingArt.png";

const HeroHeader = (props) => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/** Hero header */}
      <h1 className="app__header-h1">{props.header}</h1>
      <p className="p__opensans" style={{ margin: "2rem 0", fontSize:"22px", color:"black"}}>
        {props.summary}
      </p>
    </div>
    {/** Hero main image  */}
    <div className="header__header-img ">
      <img src={LandingArt} alt="header_img" />
    </div>
  </div>
);

export default HeroHeader;
