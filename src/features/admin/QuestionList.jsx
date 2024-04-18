import { useAdminContext } from "../../context/AdminContext";
import Question from "./Question";

export default function QuestionList() {
  const { activeCallType } = useAdminContext();
  return (
    <div>
      <h1>Questions</h1>

      <div className="AdminContentContainer">
        {activeCallType.questions.map((element) => {
          return (
            <Question
              key={`${element.name}-${element.id}`}
              element={element}
              className="Question"
            />
          );
        })}
      </div>
    </div>
  );
}
