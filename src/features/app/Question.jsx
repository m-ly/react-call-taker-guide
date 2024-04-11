import { useState } from "react";

function Question({ question, index }) {
  const [answer, setAnswer] = useState("");

  const handleBlur = () => {
    // onBlur(index, answer);
    return;
  };

  return (
    <div>
      <label>
        {index + 4}: {question}
      </label>
      <br></br>
      <textarea
        value={answer}
        name={`q${index + 4}`}
        onChange={(e) => setAnswer(e.target.value)}
        onBlur={handleBlur}
        className=""
      />
    </div>
  );
}

export default Question;
