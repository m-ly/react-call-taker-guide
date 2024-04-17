import { useState } from "react";

import { useUpdateQuestion } from "../../services/useUpdateQuestion";
import { useAppContext } from "../../context/AppContext";

import CallTypeTable from "./CallTypeTable";
import NewGuide from "./NewGuide";
import QuestionList from "./QuestionList";
import KeywordsList from "./KeywordsList";
import EditForm from "./EditForm";

function CallTypePanel() {
  const [showForm, setShowForm] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [activeCallType, setActiveCallType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const { updateQuestion } = useUpdateQuestion();
  const { handleSetForm } = useAppContext();

  async function handleUpdateQuestion(e) {
    e.preventDefault();
    updateQuestion(currentQuestion);
    setShowEditForm(false);
    setShowQuestions(true);
  }

  return (
    <div>
      <CallTypeTable
        showKeywords={showKeywords}
        showQuestions={showQuestions}
        setShowQuestions={setShowQuestions}
        setShowKeywords={setShowKeywords}
        setActiveCallType={setActiveCallType}
      ></CallTypeTable>
      {!showQuestions && !showKeywords && (
        <button
          className=""
          onClick={() => {
            setShowForm(!showForm);
            handleSetForm("questionGuide");
          }}
        >
          New Guide
        </button>
      )}
      {showForm && <NewGuide setShowForm={setShowForm} />}
      {showQuestions && (
        <QuestionList
          showKeywords={showKeywords}
          setShowKeywords={setShowKeywords}
          showQuestions={showQuestions}
          setShowQuestions={setShowQuestions}
          activeCallType={activeCallType}
          setShowEditForm={setShowEditForm}
          showEditForm={showEditForm}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}

      {showKeywords && <KeywordsList activeCallType={activeCallType} />}
      {showEditForm && (
        <EditForm
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          handleUpdateQuestion={handleUpdateQuestion}
        />
      )}
    </div>
  );
}

export default CallTypePanel;
