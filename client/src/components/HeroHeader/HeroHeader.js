import React from "react";
import "./HeroHeader.css";
import LandingArt from "../../images/LandingArt.png";

const HeroHeader = (props) => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/** Hero header */}
      <h1 className="app__header-h1"> Reference tool for students</h1>
      <p className="p__opensans" style={{ margin: "2rem 0", fontSize:"22px", color:"black"}}>
      Addressing the lack of reference photos of dermatological conditions on skin of color. We help nursing and medical students be able to identify how skin conditions look on black/brown skin.
      </p>
    </div>
    {/** Hero main image  */}
    <div className="header__header-img ">
      <img src={LandingArt} alt="header_img" />
    </div>
  </div>
);

export default HeroHeader;
