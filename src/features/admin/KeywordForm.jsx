import { useState } from "react";
import useAddKeyword from "../../hooks/useAddKeywords";

function KeywordsForm({ keywords, setKeywords, callTypeId }) {
  const [keyword, setKeyword] = useState("");
  const { addKeyWord } = useAddKeyword();

  function handleAddKeyword(e) {
    e.preventDefault();
    callTypeId
      ? addKeyWord({ callTypeId, keyword })
      : setKeywords([...keywords, keyword]);

    setKeyword("");
  }

  return (
    <form>
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
    </form>
  );
}

export default KeywordsForm;
