import { useState } from "react";
import CallTypesList from "./components/sidebar/CallTypesList";
import Banner from "./components/Banner";
import DynamicForm from "./components/CallTypeForm";
import * as helpers from "./helpers/helpers";

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
  const [form, setForm] = useState("");

  function handleSetCallType(callType, questions) {
    setCallTypes({ ...callTypes, [callType]: questions });
  }

  function handleCallSelection(callTypes, type) {
    const questions = helpers.buildQuestionList(callTypes, type);
    setQuestions(questions);
    setForm("questions");
  }

  return (
    <div className="app">
      <Banner setForm={setForm} onSetCallType={handleSetCallType} />
      <CallTypesList callTypes={callTypes} onSelect={handleCallSelection} />

      {form && (
        <DynamicForm
          onSetCallType={handleSetCallType}
          questions={questions}
          setForm={setForm}
          form={form}
        />
      )}
    </div>
  );
}

export default App;
