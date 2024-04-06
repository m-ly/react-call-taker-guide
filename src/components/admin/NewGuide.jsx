import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
import { createNewGuide } from "../../services/apiCallTypes";
import CallTypeForm from "./CallTypeForm";
import QuestionsForm from "./QuestionsForm";
import KeywordsForm from "./KeywordForm";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddCallTypeForm({ setShowForm }) {
  const { currentForm, handleSetForm } = useAppContext();
  const [questions, setQuestions] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [callType, setCallType] = useState("");
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: createNewGuide,
    onSuccess: () => {
      toast.success(`New call type ${callType} successfully added!`);
      queryClient.invalidateQueries({ queryKey: ["calltype"] });
    },
    onError: (err) => toast.error(err.message),
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = { name: callType, questions: questions, keywords: keywords };
      mutate(data);
      //await createNewGuide(callType, questions, keywords);

      setShowForm(false);
    } catch {
      throw new Error("Replace me! This is a test error notification");
    }
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
