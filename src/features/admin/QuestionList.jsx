import Question from "./Question";
export default function QuestionList({
  activeCallType,
  setShowQuestions,
  setShowEditForm,
  showQuestions,
  showEditForm,
  setCurrentQuestion,
}) {
  return activeCallType.questions.map((element) => {
    return (
      <li
        key={element.id}
        style={{ display: "inline-block", marginRight: "10px" }}
      >
        <Question
          setCurrentQuestion={setCurrentQuestion}
          setShowQuestions={setShowQuestions}
          setShowEditForm={setShowEditForm}
          showQuestions={showQuestions}
          showEditForm={showEditForm}
          element={element}
        />
      </li>
    );
  });
}
