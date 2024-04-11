import { useState } from "react";

export default function QuestionsForm({
  setQuestions,
  setCurrentForm,
  questions,
}) {
  const [currentQuestion, setCurrentQuestion] = useState("");

  function handleAddQuestion(event) {
    event.preventDefault();
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion("");
  }

  return (
    <div className="questionsForm">
      <form onSubmit={() => setCurrentForm("setKeywordsForm")}>
        <div>
          <div>
            <label htmlFor="question">New Question</label>
            <input
              type="text"
              id="question"
              value={currentQuestion}
              placeholder="Enter a New Question"
              onChange={(e) => setCurrentQuestion(e.target.value)}
            />
            {currentQuestion && (
              <button
                style={{ padding: "4px", margin: "5px", width: "40px" }}
                onClick={handleAddQuestion}
              >
                +
              </button>
            )}
          </div>

          {questions.length >= 1 && <button type="Submit">Add Keywords</button>}
        </div>
      </form>
    </div>
  );
}
