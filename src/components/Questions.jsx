import { useState } from "react";

function Question({ onBlur, question, index }) {
  const [answer, setAnswer] = useState("");

  const handleBlur = () => {
    onBlur(index, answer);
  };

  return (
    <div>
      <label>
        {index + 1}: {question}
      </label>
      <br></br>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onBlur={handleBlur}
        rows="5"
        cols="50"
      />
    </div>
  );
}

function CallGuideForm({ questions }) {
  const [answers, setAnswers] = useState([]);

  // concatenates all answers and copies to keyboard
  const handleSubmit = async (e) => {
    e.preventDefault();

    const combinedAnswers = answers.join("\n");

    try {
      await navigator.clipboard.writeText(combinedAnswers);
      console.log("Answers copied to clipboard:", combinedAnswers);
      setAnswers([]);
    } catch (error) {
      console.error("Clipboard copy failed:", error);
    }
  };

  const handleFocusChange = (index, answer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = answer;
      return updatedAnswers;
    });
  };

  return (
    <div className="dynamic">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Questions</h3>
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            index={index}
            onBlur={handleFocusChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CallGuideForm;
