import { useState } from "react";

import CallTypesList from "./components/sidebar/CallTypesList";
import Banner from "./components/Banner";
import DynamicForm from "./components/CallTypeForm";
import CallGuideForm from "./components/Questions";
import "./App.css";

const exampleCallTypes = {
  SUBBOT: ["What is the description of the person?", "What is he doing?"],
  12677: ["Can you provide the exact address?"],
  party: [
    "What is the exact address?",
    "About how many people are there",
    "Did the caller provide any additional information",
  ],
};

function App() {
  const [callTypes, setCallTypes] = useState(exampleCallTypes);
  const [questions, setQuestions] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSetCallType = (callType, questions) => {
    setCallTypes({ ...callTypes, [callType]: questions });
  };

  function handleSelection(callTypes, type) {
    const callQuestions = callTypes[type];
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
      <Banner setShowForm={setShowForm} onSetCallType={handleSetCallType} />

      <CallTypesList callTypes={callTypes} onSelect={handleSelection} />

      {questions && <CallGuideForm questions={questions} />}

      {showForm && (
        <DynamicForm
          onSelect={handleSelection}
          onSetCallType={handleSetCallType}
        />
      )}
    </div>
  );
}

export default App;
