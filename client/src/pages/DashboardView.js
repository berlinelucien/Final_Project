import React from "react";
import Profile from "../components/Auth0/Profile";
import ReferenceLayout from "../components/ReferenceCard/ReferenceLayout";
import Resources from "../components/ReferenceCard/Resources";
import DictionaryAPI from "./DictionaryAPI";


const DashboardView = () => {

  
 
  return (
    <div>
     
      <Profile  />
      <ReferenceLayout />
      <DictionaryAPI />
      <Resources />
    </div>
  );
};

export default DashboardView;
