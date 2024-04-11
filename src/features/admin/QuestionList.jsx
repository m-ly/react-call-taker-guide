import Question from "./Question";
export default function QuestionList({
  activeCallType,
  setShowQuestions,
  setShowEditForm,
  showQuestions,
  showEditForm,
  setCurrentQuestion,
}) {
  return (
    <div>
      <h1>Questions</h1>

      <div className="AdminContentContainer">
        {activeCallType.questions.map((element) => {
          return (
            <Question
              key={`${element.name}-${element.id}`}
              setCurrentQuestion={setCurrentQuestion}
              setShowQuestions={setShowQuestions}
              setShowEditForm={setShowEditForm}
              showQuestions={showQuestions}
              showEditForm={showEditForm}
              element={element}
              className="Question"
            />
          );
        })}
      </div>
    </div>
  );
}
