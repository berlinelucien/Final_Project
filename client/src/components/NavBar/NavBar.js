import "./Navbar.css";
import React from "react";
import AuthNav from "../Auth0/auth-nav";
import image from "../../images/logo3.png";

//import { GiHamburgerMenu } from "react-icons/gi";
//import { MdOutlineRestaurantMenu } from "react-icons/md";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={image} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#reference">Reference Picture </a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <button className="button is-primary is-dark">
         
          <a href="#login" className="p__opensans">
            Sign Up
          </a>
        </button>

        <div />
        <div className="p__opensans">
        <AuthNav/>
       </div>
      
     
      </div>
      <div className="app__navbar-smallscreen">
        {/* <GiHamburgerMenu
        color="#fff"
        fontSize={27}
        onClick={() => setToggleMenu(true)}
      /> */}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            {/* <MdOutlineRestaurantMenu
            fontSize={27}
            className="overlay__close"
            onClick={() => setToggleMenu(false)}
          /> */}
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Reference Picture
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
