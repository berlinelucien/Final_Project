import React from "react";
import LandingView from "./components/LandingView/Landing";
import "./App.css";
import Loading from "./components/Auth0/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import ReferenceLayout from "./components/ReferenceCard/ReferenceLayout";
import DictionaryAPI from "./pages/DictionaryAPI";
import Resources from "./components/ReferenceCard/Resources";
import NotePage from "./pages/NotePage";
import Profile from "./components/Auth0/Profile";
import background from "../src/images/background.jpg"



const App = () => {
  const { isLoading } = useAuth0();
  const { isAuthenticated, user } = useAuth0();
  console.log("isAuthenticated", isAuthenticated);
  console.log(user);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }} >
       
      {!user ? <LandingView /> : <Profile user={user} /> }

      <Routes>
      <Route path="/" element={<ReferenceLayout user={user} />} />
        <Route path="/dictionaryapi" element={<DictionaryAPI user={user} />} />
        <Route path="/notes" element={<NotePage user={user} />} />
        <Route path="/resources" element={<Resources user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
