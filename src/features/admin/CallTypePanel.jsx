import { useUpdateQuestion } from "../../services/useUpdateQuestion";
import { useAppContext } from "../../context/AppContext";
import { useAdminContext } from "../../context/AdminContext.jsx";

import CallTypeTable from "./CallTypeTable";
import NewGuide from "./NewGuide";
import QuestionList from "./QuestionList";
import KeywordsList from "./KeywordsList";
import EditForm from "./EditForm";

function CallTypePanel() {
  const {
    showForm,
    setShowForm,
    showKeywords,
    showEditForm,
    setShowEditForm,
    showQuestions,
    setShowQuestions,
    currentQuestion,
  } = useAdminContext();

  const { updateQuestion } = useUpdateQuestion();
  const { handleSetForm } = useAppContext();

  async function handleUpdateQuestion(e) {
    e.preventDefault();
    updateQuestion(currentQuestion);
    setShowEditForm();
    setShowQuestions();
  }

  return (
    <div>
      <CallTypeTable />
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
      {showQuestions && <QuestionList />}

      {showKeywords && <KeywordsList />}
      {showEditForm && <EditForm handleUpdateQuestion={handleUpdateQuestion} />}
    </div>
  );
}

export default CallTypePanel;
