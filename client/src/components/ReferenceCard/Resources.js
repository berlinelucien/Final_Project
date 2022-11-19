import React, { useState, useEffect } from "react";
import SubHeading from "./SubHeading";

const Resources = () => {
  const [resources, setResources] = useState([]);

  const getResource = async () => {
    const response = await fetch("/resources");
    const data = await response.json();
    setResources(data);
  };
  useEffect(() => {
    getResource();
  }, []);

  return (
    <div className="container" id="resources">
          <SubHeading
          title={"Resources"}
        />
          {resources.map((data, index) => (
              <div className="card" key={index}>
                  {data.name}
                  <a href={data.weblink}> Link </a>
                  </div>
          ))}
         
    </div>
  );
};

export default Resources;
