import RedX from "../../assets/red-x-10333.svg?react";

function Question({
  element,
  setShowQuestions,
  showQuestions,
  setShowEditForm,
  showEditForm,
  setCurrentQuestion,
}) {
  return (
    <li key={element.name}>
      {element.question}

      <button
        onClick={() => {
          setShowQuestions(!showQuestions);
          setShowEditForm(!showEditForm);
          setCurrentQuestion(element);
        }}
      >
        update
      </button>

      <button onClick={() => console.log("deleting ", element)}>
        <RedX height={20} width={20} className="RedX" />
      </button>
    </li>
  );
}

export default Question;
