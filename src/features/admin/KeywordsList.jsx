import { useState } from "react";
import RedX from "../../assets/red-x-10333.svg?react";

import KeywordsForm from "./KeywordForm";
import { useAdminContext } from "../../context/AdminContext";

import useKeywords from "../../hooks/useKeywords";
import useDeleteKeyword from "../../hooks/useDeleteKeyword";
import Spinner from "../components/Spinner";

export default function KeywordsList() {
  const [addKeywordForm, setAddKeywordForm] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const { activeCallType } = useAdminContext();

  const { keywordsList, isLoading } = useKeywords(activeCallType.id);
  const { deleteKeyword, isLoading: isDeletingKeyword } = useDeleteKeyword();

  if (isLoading || isDeletingKeyword) return <Spinner />;

  return (
    <div>
      <div className="details-container">
        {keywordsList.map((element) => {
          return (
            <div key={element.id} className="keyword">
              {element.keyword}
              <div onClick={() => deleteKeyword(element)} className="Redx">
                <RedX />
              </div>
            </div>
          );
        })}
      </div>

      {!addKeywordForm ? (
        <button onClick={() => setAddKeywordForm(!addKeywordForm)}>
          Add a new Keyword
        </button>
      ) : (
        <KeywordsForm
          keywords={keywords}
          setKeywords={setKeywords}
          callTypeId={activeCallType.id}
        />
      )}
    </div>
  );
}
