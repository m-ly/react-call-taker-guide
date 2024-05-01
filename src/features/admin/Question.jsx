import RedX from "../../assets/red-x-10333.svg?react";

import { useAdminContext } from "../../context/AdminContext";

function Question({ element, onDelete }) {
  const { setShowQuestions, setShowEditForm, setCurrentQuestion } =
    useAdminContext();

  return (
    <li key={element.name}>
      {element.question}

      <button
        onClick={() => {
          setShowQuestions();
          setShowEditForm();
          setCurrentQuestion(element);
        }}
      >
        update
      </button>

      <div
        onClick={() => {
          onDelete(element);
        }}
      >
        <RedX height={20} width={20} className="RedX" />
      </div>
    </li>
  );
}

export default Question;
