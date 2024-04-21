import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import RedX from "../../assets/red-x-10333.svg?react";

import KeywordsForm from "./KeywordForm";
import { useAdminContext } from "../../context/AdminContext";

import { getKeywords } from "../../services/apiCallTypes";
import useDeleteKeyword from "../../hooks/useDeleteKeyword";

export default function KeywordsList() {
  const [addKeywordForm, setAddKeywordForm] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const { activeCallType } = useAdminContext();

  function useKeywords(callTypeId) {
    const queryClient = useQueryClient();

    const { data: keywordsList, isLoading } = useQuery({
      queryKey: ["keywords", callTypeId],
      queryFn: () => getKeywords(callTypeId),
      staleTime: Infinity,
    });

    const refetchKeywords = () => {
      queryClient.invalidateQueries(["keywords", callTypeId]);
    };

    return { keywordsList, isLoading, refetchKeywords };
  }

  const { keywordsList, isLoading } = useKeywords(activeCallType.id);
  const { deleteKeyword, isLoading: isDeletingKeyword } = useDeleteKeyword();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(activeCallType.id, keywords);
  }

  if (isLoading || isDeletingKeyword) return <h1>Loading</h1>;

  return (
    <div className="">
      <h1>Keywords</h1>
      <div className="AdminContentContainer">
        {keywordsList.map((element) => {
          return (
            <span key={element.keyword} className="Keyword">
              {element.keyword}
              <button onClick={() => deleteKeyword(element)} className="Redx">
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
