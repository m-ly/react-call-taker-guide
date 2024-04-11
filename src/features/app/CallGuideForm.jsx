import { useAppContext } from "../../context/AppContext";
import { findMatchingCallTypes } from "../../utils/helpers";
import toast from "react-hot-toast";

import Question from "./Question";

function IntroductoryQuestions({ callTypes }) {
  const { handleFilterCallTypes } = useAppContext();

  async function handleTypeChange(e) {
    const input = e.target.value;

    const filteredCallTypes = findMatchingCallTypes(callTypes, input);
    console.log(filteredCallTypes);
    await handleFilterCallTypes(filteredCallTypes);
  }

  return (
    <>
      <div>
        <label>1: What is the Address of the Emergency?</label>
        <br></br>
        <textarea name="q1" />
      </div>
      <div>
        <label>2: What are you reporting?</label>
        <br></br>
        <textarea name="q2" onChange={(e) => handleTypeChange(e)} />
      </div>
      <div>
        <label>3: When did this happen?</label>
        <br></br>
        <textarea name="q3" />
      </div>
    </>
  );
}

function CallGuideForm({ callTypes }) {
  //const { callTypes, activeCallType } = useAppContext();
  const { activeCallType } = useAppContext();
  const currentTypeData = Object.values(callTypes).find(
    (ele) => ele.name === activeCallType
  );

  // concatenates all answers and copies to keyboard
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
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

      <form onSubmit={(e) => handleSubmit(e)}>
        <IntroductoryQuestions callTypes={callTypes} />
        {activeCallType && (
          <>
            {currentTypeData.questions.map((question, index) => (
              <Question
                key={`${currentTypeData.name}-${index}`}
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
