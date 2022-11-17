import React from "react";
import background from "./images/background.jpg";
import NavBar from "./components/NavBar/NavBar";
import LandingView from "./components/LandingView/Landing";
import "./App.css";
import Loading from "./components/Auth0/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
//import ReferenceLayout from "./components/ReferenceCard/ReferenceLayout";
import Dashboard from "./pages/DashboardView";
import AuthNav from "./components/Auth0/auth-nav";

const App = () => {
  const { isLoading } = useAuth0();
  const { isAuthenticated, user } = useAuth0();
  console.log("isAuthenticated", isAuthenticated);
  console.log(user);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      
      <NavBar/>
      <div>
        {!user ? <LandingView /> : <Dashboard/>}

        <Routes>
         
          <Route path="/users" element={<Dashboard user={user} />} />
          
        </Routes>
        
       
      </div>
    </div>
  );
};

export default App;
