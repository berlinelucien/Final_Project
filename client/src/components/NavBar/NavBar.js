import "./Navbar.css";
import React from "react";
import AuthNav from "../Auth0/auth-nav";
import image from "../../images/logo3.png";
import {Link} from "react-router-dom";

const NavBar = () => {
  //const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav id="navbarBasicExample" className="app__navbar">
      <div className="app__navbar-logo">
        <img src={image} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Reference Picture </Link>
        </li>
        <li className="p__opensans">
          <Link to="/DictionaryAPI">Look Up Words </Link>
        </li>
        <li className="p__opensans">
          <Link to="/Resources">Resources </Link>
        </li>
        {/* <li className="p__opensans">
          <a href="/Notes"> Notes </a>
        </li> */}
      </ul>
      <div className="app__navbar-login">
        <AuthNav />
        <div />
        <div className="p__opensans"></div>
      </div>
      <div className="app__navbar-smallscreen">
        {/* {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ul className="app__navbar-smallscreen_links">
              
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
              <li>
                <a href="#resources" onClick={() => setToggleMenu(false)}>
                  Resources
                </a>
              </li>
            </ul>
          </div>
        )} */}
      </div>
    </nav>
  );
};
export default NavBar;
