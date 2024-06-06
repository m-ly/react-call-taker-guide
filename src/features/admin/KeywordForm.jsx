import { useState } from "react";
import useAddKeyword from "../../hooks/useAddKeywords";

export default function KeywordsForm({ setKeywords, callTypeId }) {
  const [keyword, setKeyword] = useState("");
  const { addKeyWord } = useAddKeyword();

  function handleAddKeyword(e) {
    e.preventDefault();
    console.log("adding keyword:", keyword);
    addKeyWord({ id: callTypeId, keywords: keyword });
    // setKeywords((prevKeywords) => [...prevKeywords, keyword]);
    setKeyword("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    // const splitKeywords = keywords
    //   .map((element) => {
    //     return element.match(/\s|,|;|:/) ? element.split(/\s|;|,|:/) : element;
    //   })
    //   .flat()
    //   .filter((ele) => ele.length > 1);

    addKeyWord({ id: callTypeId, keywords: keyword });
    setKeyword("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="textarea"
        id="keyword"
        value={keyword}
        placeholder="Enter a New Keyword"
        onChange={(e) => setKeyword(e.target.value)}
      ></input>

      {keyword && (
        <button
          style={{ padding: "4px", margin: "5px", width: "40px" }}
          onClick={handleAddKeyword}
        >
          +
        </button>
      )}
      <br />
      <button
        style={{ padding: "4px", margin: "5px", width: "200px" }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
