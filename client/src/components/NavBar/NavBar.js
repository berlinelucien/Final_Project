import "./Navbar.css";
import React from "react";
import AuthNav from "../Auth0/auth-nav";
import image from "../../images/logo3.png";


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
          <a href="#dictionary">Look Up Words </a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <div />
        <div className="p__opensans">
          <AuthNav />
        </div>
      </div>
      <div className="app__navbar-smallscreen">
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ul className="app__navbar-smallscreen_links">
              <li>
              <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#reference" onClick={() => setToggleMenu(false)}>
                  Reference Picture
                </a>
              </li>
              <li>
              <a href="#dictionary" onClick={() => setToggleMenu(false)}>
                  Look Up Words
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
