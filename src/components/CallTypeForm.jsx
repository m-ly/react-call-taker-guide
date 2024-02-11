import { useState } from "react";
import CallGuideForm from "./Questions";

function CallTypeForm({ setCallType, callType, setForm }) {
  function handleClick(e) {
    e.preventDefault();
    setForm("addQuestionForm");
  }

  return (
    <form className="dynamic">
      <input
        type="text"
        value={callType}
        placeholder="...Add a New Call Type"
        onChange={(event) => setCallType(event.target.value)}
      />

      <button onClick={handleClick}>New</button>
    </form>
  );
}

function QuestionForm({ callType, onSetCallType, setForm }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  function handleAddQuestion(event) {
    event.preventDefault();

    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSetCallType(callType, questions);
    setForm("");
  }
  return (
    <form className="dynamic" onSubmit={(e) => handleSubmit(e)}>
      <h3>{callType}</h3>
      <input
        type="text"
        value={currentQuestion}
        onChange={(e) => setCurrentQuestion(e.target.value)}
      />
      <button onClick={handleAddQuestion}>Insert Question</button>

      {questions && (
        <>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {index + 1} {question}
              </li>
            ))}
          </ul>
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
}

function DynamicForm({ onSetCallType, questions, form, setForm }) {
  const [callType, setCallType] = useState("");

  function submitCallType(event) {
    event.preventDefault();
  }

  return (
    <>
      {form === "addCallForm" && (
        <CallTypeForm
          setCallType={setCallType}
          callType={callType}
          submitCallType={submitCallType}
          setForm={setForm}
        />
      )}

      {form === "addQuestionForm" && (
        <QuestionForm
          callType={callType}
          onSetCallType={onSetCallType}
          setAddQuestionForm={""}
          setForm={setForm}
        />
      )}

      {form === "questions" && <CallGuideForm questions={questions} />}
    </>
  );
}

export default DynamicForm;
