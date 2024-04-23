import { useAppContext } from "../../context/AppContext";
import { findMatchingCallTypes } from "../../utils/helpers";
import toast from "react-hot-toast";

import Question from "./Question";

function IntroductoryQuestions({ callTypes }) {
  const { handleFilterCallTypes } = useAppContext();

  async function handleTypeChange(e) {
    const input = e.target.value;

    const filteredCallTypes = findMatchingCallTypes(callTypes, input);

    await handleFilterCallTypes(filteredCallTypes);
  }

  return (
    <>
      <div>
        <label htmlFor="q1">1: What is the Address of the Emergency?</label>
        <br></br>
        <textarea name="q1" id="q1" />
      </div>
      <div>
        <label htmlFor="q2">2: What are you reporting?</label>
        <br></br>
        <textarea name="q2" id="q2" onChange={(e) => handleTypeChange(e)} />
      </div>
      <div>
        <label htmlFor="q3">3: When did this happen?</label>
        <br></br>
        <textarea name="q3" id="q3" />
      </div>
    </>
  );
}

function CallGuideForm({ callTypes }) {
  const { activeCallType } = useAppContext();

  // concatenates all answers and copies to keyboard
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const currentAnswers = [];

    for (let name of data.keys()) {
      currentAnswers.push(data.get(name));
    }

    const combinedAnswers = currentAnswers.join("...");

    try {
      await navigator.clipboard.writeText(combinedAnswers);
      toast.success("Successfully Copied to Clipboard!");
    } catch (error) {
      console.error("Clipboard copy failed:", error);
    }
  };

  return (
    <div>
      <h3>Questions</h3>

      <form id="callGuide" onSubmit={(e) => handleSubmit(e)}>
        <IntroductoryQuestions callTypes={callTypes} />
        {activeCallType && (
          <>
            {activeCallType.questions.map((question, index) => (
              <Question
                key={`${activeCallType.name}-${index}`}
                question={question.question}
                index={index}
              />
            ))}
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
}

export default CallGuideForm;
