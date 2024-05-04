import RedX from "../../assets/red-x-10333.svg?react";
import Edit from "../../assets/edit.svg?react";

import { useAdminContext } from "../../context/AdminContext";

function Question({ element, onDelete }) {
  const { setShowQuestions, setShowEditForm, setCurrentQuestion } =
    useAdminContext();

  return (
    <li key={element.name} className="question">
      {element.question}

      <div className="question-options">
        <div
          onClick={() => {
            setShowQuestions();
            setShowEditForm();
            setCurrentQuestion(element);
          }}
        >
          <Edit className="Edit" />
        </div>

        <div
          onClick={() => {
            onDelete(element);
          }}
        >
          <div className="redX">
            <RedX height={20} width={20} className="Redx" />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Question;
