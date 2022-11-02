import React, { useEffect, useState} from "react";
import CardInfo from "../CardInfo";
import "./ReferenceCard.css";

const ReferenceLayout = () => {
  const [condition, setCondition] = useState([]);
  console.log("skincodition", condition);
  // get skin condition data
  const getSkinCondition = async () => {
    const response = await fetch("http://localhost:4000/skinCondition");
    const data = await response.json();
    setCondition(data);
  };
  useEffect(() => {
    getSkinCondition();
  }, []);


  return (
    <div
      className="app__referencePhoto flex__center section__padding"
      id="reference"
    >
      <div className="app__referencePhoto">
        <h1>Skin condition on black/brown skin</h1>
        <div className="app__referencePhoto flex__center">
          <div className="app__referencePhoto_items">
            {condition.map((data, index) => (
              <CardInfo key={index}
                imageUrl={data.photo}
                title={data.condition_name}
                info={data.definition}
                details={data.symptoms}
              />
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceLayout;
