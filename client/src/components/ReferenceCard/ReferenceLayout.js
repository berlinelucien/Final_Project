import React, { useEffect, useState} from "react";
import CardInfo from "../CardInfo";
import Grid from '@mui/material/Grid';
import "./ReferenceCard.css";
import Box from "@mui/material/Box";

const ReferenceLayout = () => {
  // initial state for skin condition 
  const [condition, setCondition] = useState([]);
  console.log("skincodition", condition);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["condition_name"]);

  // search function for user be able to search for the condition name
    const searchItem = (condition) => {
        return condition.filter((data) => {
            return searchParam.some((newCondition) => {
                return (
                    data[newCondition].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                );
            });
        });
    };
 
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
        <div className="search-content">
                <input
                    class="input is-success is-rounded"
                    type="text"
                    placeholder="Search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            </div>
        <div className="app__referencePhoto flex__center">
           {/** card container, material grid creates even spacing between the cards 
            * mapping thru database for card layout
           */}
          
          <div className="app__referencePhoto_items">
            <Grid container spacing={4} >
              {searchItem(condition).map((data, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} >
                  <Box sx={{ width: 600, height: 450}}>
              <CardInfo key={index}
                imageUrl={data.photo}
                title={data.condition_name}
                details={data.symptoms}
                  />
                  </Box>
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
