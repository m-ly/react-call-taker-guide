import { useAppContext } from "../../context/AppContext";
import { useAdminContext } from "../../context/AdminContext.jsx";

import { useUpdateQuestion } from "../../hooks/useUpdateQuestion.js";
import CallTypeTable from "./CallTypeTable";
import NewGuide from "./NewGuide";
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
          Create New Guide
        </button>
      )}
      {showForm && <NewGuide setShowForm={setShowForm} />}
      {showEditForm && <EditForm handleUpdateQuestion={handleUpdateQuestion} />}
    </div>
  );
}

export default CallTypePanel;
