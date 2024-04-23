import { useState } from "react";

function Question({ question, index }) {
  const [answer, setAnswer] = useState("");

  return (
    <div>
      <label htmlFor={`q${index + 4}`}>
        {index + 4}: {question}
      </label>
      <br></br>
      <textarea
        value={answer}
        name={`q${index + 4}`}
        id={`q${index + 4}`}
        onChange={(e) => setAnswer(e.target.value)}
        className=""
      />
    </div>
  );
}

export default Question;
