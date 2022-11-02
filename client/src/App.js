import React from "react";
//import { Route, Routes } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";
import background from "./images/background.jpg"
import Landing from "./pages/Landing";
import "./App.css";


const App = () => {
  return (
    
    <div className="App"
    style={{ backgroundImage: `url(${background})` }}>
      <Landing />
      
    </div>

    
  );
};

export default App;
