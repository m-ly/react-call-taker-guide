import { useState } from "react";
import { useAppContext } from "../context/AppContext";

import NewGuide from "../features/admin/NewGuide";
import Header from "../features/app/Header";
import CallTypeTable from "../features/admin/CallTypeTable";
import EditForm from "../features/admin/EditForm";
import KeywordsList from "../features/admin/KeywordsList";
import QuestionList from "../features/admin/QuestionList";
import AddUserForm from "../features/admin/AddUserForm";

import Modal from "../ui/Modal";
import { useUpdateQuestion } from "../services/useUpdateQuestion";
import UserList from "../features/admin/UserList";

function Admin() {
  const [showForm, setShowForm] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [activeCallType, setActiveCallType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [activePanel, setActivePanel] = useState("callTypes");

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
      <div className="AdminContainer">
        <div className="AdminPanelNav">
          <h1>Admin Panel</h1>
          <ul>
            <li>
              <h3
                className={`CallTypePanelMarker ${
                  activePanel === "callTypes" ? "active" : ""
                }`}
                onClick={() => setActivePanel("callTypes")}
              >
                CallTypes
              </h3>
            </li>
            <li>
              <h3
                className={`UsersPanelMarker ${
                  activePanel === "users" ? "active" : ""
                }`}
                onClick={() => setActivePanel("users")}
              >
                Users
              </h3>
            </li>
          </ul>
        </div>

        {activePanel === "users" && (
          <div>
            <AddUserForm />
            <UserList />
          </div>
        )}

        {activePanel === "callTypes" && (
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
        )}
      </div>
    </div>
  );
}

export default Admin;
