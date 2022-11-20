import React, { useState, useEffect } from "react";
import SubHeading from "./SubHeading";

const Resources = () => {
  const [resources, setResources] = useState([]);

  const getResource = async () => {
    const response = await fetch("http://localhost:4000/resources");
    const data = await response.json();
    setResources(data);
  };
  useEffect(() => {
    getResource();
  }, []);

  return (
    <div className="container_resources" id="resources">
      <SubHeading title={"Resources"} />

      <table class="table">
        <thead className="p__opensans">
          <tr>
            <th scope="col"></th>
            <th scope="col">Textbooks: </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="p__opensans">
          {resources.map((data, index) => (
            <tr key={index}>
              <th scope="row"></th>
              <td>{data.name}</td>
              <td>
                <button class="button is-link is-light">
                  <a target="_blank" href={data.weblink} rel="noreferrer">
                    {" "}
                    Get Book{" "}
                  </a>
                </button>
              </td>
            </tr>

            //   <div className="card" key={index}>
            //       {data.name}
            //       <a href={data.weblink}> Link </a>
            //       </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Resources;
