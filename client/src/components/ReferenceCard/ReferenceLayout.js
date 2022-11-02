import React from "react";
import CardInfo from "../CardInfo";
import "./ReferenceCard.css";

const ReferenceLayout = () => {
  return (
    <div
      className="app__referencePhoto flex__center section__padding"
      id="reference"
    >
      <div className="app__referencePhoto">
        <div className="app__referencePhoto flex__center">
          <div className="app__referencePhoto_items">
            <CardInfo
              imageUrl={
                "https://images.unsplash.com/photo-1609542334025-778f9093a234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              }
              title={"reference.title"}
              info={"reference.price"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceLayout;
