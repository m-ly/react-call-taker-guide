import { useState } from "react";

function CallTypeForm({ setCallType, callType, submitCallType }) {
  return (
    <form className="dynamic">
      <input
        type="text"
        value={callType}
        placeholder="...Add a New Call Type"
        onChange={(event) => setCallType(event.target.value)}
      />

      <button onClick={submitCallType}>New</button>
    </form>
  );
}

function QuestionForm({ callType, onSetCallType, setAddQuestionForm }) {
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
    setAddQuestionForm(false);
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

function DynamicForm({ onSetCallType }) {
  const [callType, setCallType] = useState("");
  const [showCallTypeForm, setShowCallTypeForm] = useState(true);
  const [addQuestionForm, setAddQuestionForm] = useState(false);

  function submitCallType(event) {
    event.preventDefault();

    console.log(callType);
    setShowCallTypeForm(false);
    setAddQuestionForm(true);
  }

  return (
    <>
      {showCallTypeForm && (
        <CallTypeForm
          setCallType={setCallType}
          callType={callType}
          submitCallType={submitCallType}
        />
      )}

      {addQuestionForm && (
        <QuestionForm
          callType={callType}
          onSetCallType={onSetCallType}
          setAddQuestionForm={setAddQuestionForm}
        />
      )}
    </>
  );
}

export default DynamicForm;
