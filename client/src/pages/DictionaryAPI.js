import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import Definitions from "../components/Definition/Definitions";
import { grey } from "@material-ui/core/colors";
import { Container, Switch, withStyles } from "@material-ui/core";
import HeaderDict from "../components/HeaderDictionary/HeaderDict";



const DictionaryAPI = () => {
  // Setting up the initial states
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightTheme, setLightTheme] = useState(false);


  // Function to fetch information on button
  // click, and set the data accordingly
  const getMeaning = async () => {
        try {
          const data = await Axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
            setMeanings(data.data)
        } catch (error) {
            console.log(error);
        }
  };
  
    console.log(meanings);
    useEffect(() => {
        getMeaning();
 
    // eslint-disable-next-line 
    }, [word, category]);
  
  //light mode/dark mode function
    const PurpleSwitch = withStyles({
      switchBase: {
        color: grey[50],
        "&$checked": {
          color: grey[900],
        },
        "&$checked + $track": {
          backgroundColor: grey[500],
        },
      },
      checked: {},
      track: {},
    })(Switch);

   /** id=dictionary creates the link for the navLink */
  return (
   <div
      className="app__referencePhoto flex__center section__padding" id="dictionary"
      style={{
        height: "300vh",
        backgroundColor: LightTheme ? "#fff" : "#808080",
        color: LightTheme ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
     { /** container for dictionary */}
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <PurpleSwitch
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div>
        
        { /** header and definition layout , passing the data 
         * from headerDictionary and definitions to Dictionary API */}
        <HeaderDict
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          word={word}
          setMeanings={setMeanings}
          LightTheme={LightTheme}
        />
        {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            LightTheme={LightTheme}
            category={category}
          />
        )}
      </Container>
    </div>
  );
};

export default DictionaryAPI;