import { TextField, ThemeProvider } from "@material-ui/core";
import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import countries from '../../data_Categories';
import { debounce } from "lodash";
import './Header.css'


// deconstructing the props
const HeaderDict = ({
  category,
  setCategory,
  setWord,
  word,
  setMeanings,
  LightTheme,
}) => {
  
//function to handle the change when client type in a word
// set the definition of the meaning 
    const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    setMeanings([]);
  };

    const handleText = debounce((text) => {
    setWord(text);
  }, 500);

  return (
    <div className="header">
      <span className="title">{word ? word : "Look up medical words"}</span>
      <div className="inputs">
        <ThemeProvider >
          {/** search bar for client to type in word to look up */}
          <TextField
            className="search"
            id="filled-basic"
            // value={word}
            label="Search a Word"
            onChange={(e) => handleText(e.target.value)}
          />
           {/** select country to change the language */}
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
            className="select"
          >
            {countries.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default HeaderDict;