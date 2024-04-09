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
    <div>
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
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RedX style={{ height: "20px" }} />
      </button>
    </div>
  );
}

export default Question;
