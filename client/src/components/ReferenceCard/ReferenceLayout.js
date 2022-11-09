import React, { useEffect, useState} from "react";
import CardInfo from "../CardInfo";
import Grid from '@mui/material/Grid';
import "./ReferenceCard.css";

const ReferenceLayout = () => {
  // initial state for skin condition 
  const [condition, setCondition] = useState([]);
  console.log("skincodition", condition);
  // fetch skin condition data from backend server
  const getSkinCondition = async () => {
    const response = await fetch("/skinCondition");
    const data = await response.json();
    setCondition(data);
  };
  // render the information
  useEffect(() => {
    getSkinCondition();
  }, []);


  return (
    // id=reference creates the link for the toggle
    // reference photo container
    <div
      className="app__referencePhoto flex__center section__padding"
      id="reference"
    >
      {/** header title container */}
      <div className="app__referencePhoto">
        <h1>Skin condition on black/brown skin</h1>
        <div className="app__referencePhoto flex__center">
           {/** card container, material grid creates even spacing between the cards 
            * mapping thru database for card layout
           */}
          <div className="app__referencePhoto_items">
            <Grid container spacing={4}>
              {condition.map((data, index) => (
              <Grid item key={data} xs={12} sm={6} md={4}>
              <CardInfo key={index}
                imageUrl={data.photo}
                title={data.condition_name}
                details={data.symptoms}
                  />
                  </Grid>
            ))}
           </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceLayout;
