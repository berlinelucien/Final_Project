import React from "react";
import "./Notes.css"
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      {/** the heading of the notes app */}
      <h1>
        <span style={{ color: "#308d46" }}>React</span>
        Notes
      </h1>

      {/**toggle button - using this button we can change the background
       * theme for the application
       */}
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;