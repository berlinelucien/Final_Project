import React from "react";
import background from "./images/background.jpg";
import NavBar from "./components/NavBar/NavBar";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import "./App.css";
import Loading from "./components/Auth0/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes, Link } from "react-router-dom";
import ReferenceLayout from "./components/ReferenceCard/ReferenceLayout";
import Profile from "./components/Auth0/userProfile";
import DictionaryAPI from "./pages/DictionaryAPI";

const App = () => {
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  console.log(user)
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <NavBar />
      <div>
      {!user ? <span>Welcome</span> : <span>Hello <Link to="api/me">{user.name}</Link></span> }
      <Routes>
      <Route path="/" element={<HeroHeader user={user}/>} />
          <Route path="api/me" element={<Profile user={user} />} />
          </Routes>
        <DictionaryAPI />
        <ReferenceLayout />
      </div>
    </div>
  );
};

export default App;
