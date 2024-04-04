import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import { createNewGuide } from "../services/apiCallTypes";
import CallTypeForm from "./CallTypeForm";
import QuestionsForm from "./QuestionsForm";
import KeywordsForm from "./KeywordForm";
import { Navigate } from "react-router-dom";

export default function AddCallTypeForm() {
  const { callTypes, currentForm, handleSetForm } = useAppContext();
  const [questions, setQuestions] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [callType, setCallType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const updatedCallTypes = {
      ...callTypes,
      [callType]: { questions: questions, keywords: keywords },
    };
    console.log("handleSubmit");
    console.log({ [callType]: { questions: questions, keywords: keywords } });

    createNewGuide(callType, questions, keywords);
    <Navigate to="/admin" replace={true} />;
    //handleCreateGuide(updatedCallTypes);
  }

  return (
    <div>
      {currentForm === "questionGuide" && (
        <CallTypeForm
          setCallType={setCallType}
          callType={callType}
          handleSetForm={handleSetForm}
          currentForm={currentForm}
        />
      )}
      {currentForm === "questionsForm" && (
        <QuestionsForm
          setQuestions={setQuestions}
          questions={questions}
          setCurrentForm={handleSetForm}
        />
      )}
      {currentForm === "setKeywordsForm" && (
        <KeywordsForm
          setKeywords={setKeywords}
          keywords={keywords}
          handleSubmit={handleSubmit}
        />
      )}
      <div>
        <h3>Questions for Call Type: {callType}</h3>

        {questions && (
          <>
            <ul>
              {questions.map((question, index) => (
                <li key={index}>
                  {index + 1} {question}
                </li>
              ))}
            </ul>

            <h3>Keywords: </h3>
            <ul>
              {keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
