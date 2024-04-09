import { useState } from "react";
import { useAppContext } from "../context/AppContext";

import NewGuide from "../components/admin/NewGuide";
import Header from "../components/Header";
import CallTypeTable from "../features/admin/CallTypeTable";
import EditForm from "../features/admin/EditForm";
import KeywordsList from "../features/admin/KeywordsList";
import QuestionList from "../features/admin/QuestionList";
import Modal from "../ui/Modal";
import { useUpdateQuestion } from "../services/useUpdateQuestion";

function Admin() {
  const [showForm, setShowForm] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [activeCallType, setActiveCallType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const { handleSetForm } = useAppContext();
  const { updateQuestion } = useUpdateQuestion();

  async function handleUpdateQuestion(e) {
    e.preventDefault();
    updateQuestion(currentQuestion);
    setShowEditForm(false);
    setShowQuestions(true);
  }

  return (
    <div>
      <Header />
      <h1>This is the Admin Panel</h1>
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

export default Admin;
