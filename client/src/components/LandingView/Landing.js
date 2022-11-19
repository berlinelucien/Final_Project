import React from "react";
import "./Landing.css";
import background from "../../images/background.jpg";
import LandingArt from "../../images/LandingArt.png";
import AuthNav from "../Auth0/auth-nav";
import image from "../../images/logo3.png"

const Landing = () => (
  <div className="App" style={{ backgroundImage: `url(${background})` }}>
  <nav id="navbarBasicExample" className="app__navbar" >
      <div className="app__navbar-logo">
        <img src={image} alt="app__logo" />
      </div>

      <div className="app__navbar-login">
        <div />
        <div className="p__opensans">
          <AuthNav />
        </div>
      </div>

    </nav>
  <div className="app__header app__wrapper section__padding"  id="home" style={{ backgroundImage: `url(${background})` }}>
    
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
    </div>
  
);

export default Landing;
