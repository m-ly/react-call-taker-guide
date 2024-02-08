import { useState } from "react";

import CallTypesList from "./components/sidebar/CallTypesList";
import Banner from "./components/Banner";
import "./App.css";

function Questions({ questions }) {
  return (
    <div className="dynamic">
      <form>
        <h3>Questions</h3>
        {questions.map((question, index) => (
          <>
            <label>
              {index + 1}: {question}
            </label>
            <br></br>
            <textarea
              value={index}
              onChange={() => "something"}
              rows="5"
              cols="50"
            />
          </>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

function Answer() {}

function App() {
  const [callTypes, setCallTypes] = useState({});
  const [questions, setQuestions] = useState(null);

  const exampleCallTypes = {
    SUBBOT: ["What is the description of the person?", "What is he doing?"],
    12677: ["Can you provide the exact address?"],
    party: [
      "What is the exact address?",
      "About how many people are there",
      "Did the caller provide any additional information",
    ],
  };

  const handleSetCallType = (callType) => {
    setCallTypes({ ...callTypes, [callType]: [] });
  };

  function handleSelection(callQuestions) {
    const generalQuestions = [
      "What is the address?",
      "What are you reporting?",
      "When did this happen",
    ];

    const endingQuestions = ["Caller Info", "Do you want contact?"];

    const questions = [
      ...generalQuestions,
      ...callQuestions,
      ...endingQuestions,
    ];

    setQuestions(questions);
  }

  return (
    <div className="app">
      <header>
        <Banner></Banner>
      </header>

      <br></br>

      <CallTypesList callTypes={exampleCallTypes} onSelect={handleSelection} />

      {questions && <Questions questions={questions} />}

      {
        // <AddCallTypeForm onSetCallType={handleSetCallType} />}
      }
    </div>
  );
}

export default App;
