import { useState } from "react";
import RedX from "../../assets/red-x-10333.svg?react";

import KeywordsForm from "./KeywordForm";
import supabase from "../../services/supabase";
import toast from "react-hot-toast";

export default function KeywordsList({ activeCallType }) {
  const [addKeywordForm, setAddKeywordForm] = useState(false);
  const [keywords, setKeywords] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(activeCallType.id, keywords);
  }

  async function handleDeleteKeyword(element) {
    const { error } = await supabase
      .from("keywords")
      .delete()
      .eq("id", element.id);

    error
      ? toast.error(error.message)
      : toast.success("Keyword Successfully Deleted!");
  }

  return (
    <div className="">
      <h1>Keywords</h1>
      <div className="AdminContentContainer">
        {activeCallType.keywords.map((element) => {
          return (
            <span key={element.keyword} className="Keyword">
              {element.keyword}
              <button
                onClick={() => handleDeleteKeyword(element)}
                className="Redx"
              >
                <RedX />
              </button>
            </span>
          );
        })}
      </div>
      {!addKeywordForm ? (
        <button onClick={() => setAddKeywordForm(!addKeywordForm)}>
          Add a new Keyword
        </button>
      ) : (
        <KeywordsForm
          handleSubmit={handleSubmit}
          keywords={keywords}
          setKeywords={setKeywords}
        />
      )}
    </div>
  );
}
