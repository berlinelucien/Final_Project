import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HeroHeader from "../components/HeroHeader/HeroHeader";
import ReferenceLayout from "../components/ReferenceCard/ReferenceLayout";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Auth0/Loading";
import { Route, Routes, Link } from "react-router-dom";
import Profile from "../components/Auth0/userProfile"
import DictionaryAPI from "./DictionaryAPI";

const Landing = () => {
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <NavBar />
      {!user ? (
        <HeroHeader
          header="Reference tool for students"
          summary="Addressing the lack of reference photos of dermatological conditions on skin of color. We help nursing and medical students be able to identify how skin conditions look on black/brown skin."
        />
      ) : (
        <Link to="api/me">{user.name}</Link>
      )}
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="api/me" element={<Profile user={user} />} />
      </Routes>
      <DictionaryAPI />
      <ReferenceLayout />
    </div>
  );
};

export default Landing;
