
import React from "react";
import Profile from "../components/Auth0/Profile";
import ReferenceLayout from "../components/ReferenceCard/ReferenceLayout";
import DictionaryAPI from "./DictionaryAPI";


const DashboardView = () => {
 
  return (
    <div>
    
      <Profile />
      <ReferenceLayout /> 
      <DictionaryAPI />
      
    </div>
  );
};

export default DashboardView;
