import { useState } from "react";

export default function KeywordsForm({ setKeywords, keywords, handleSubmit }) {
  const [keyword, setKeyword] = useState("");

  function handleAddKeyword(e) {
    e.preventDefault();
    setKeywords([...keywords, keyword]);
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
