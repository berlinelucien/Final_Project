import "./Definition.css";

const Definitions = ({ meanings, word, LightTheme, category }) => {
  return (
    <div className="meanings">
      {/* audio---------------------------- */}
      
      {/* audio---------------------------- */}

      {/** to access the definition we have to create a map to
       * iterate thru everything to get to definition */}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightTheme ? "#3b5360" : "white",
                  color: LightTheme ? "white" : "black",
                }}
              >
                {/** ----- definition ------ */}
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {/** ------- example ------- */}
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {/** ----- synonyms ----- */}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
