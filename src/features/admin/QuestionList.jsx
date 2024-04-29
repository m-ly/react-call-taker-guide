import useDeleteQuestion from "../../hooks/useDeleteQuestion";
import { useAdminContext } from "../../context/AdminContext";
import Question from "./Question";
import useQuestions from "../../hooks/useQuestions";
import Spinner from "../components/Spinner";

export default function QuestionList({ onToggle }) {
  const { activeCallType, setShowQuestions } = useAdminContext();
  const { deleteQuestion, isLoading: isDeleting } = useDeleteQuestion();
  const { questions, isLoading: questionsLoading } = useQuestions(
    activeCallType.id
  );

  if (questionsLoading || isDeleting) return <Spinner />;

  return (
    <div>
      <span>
        <button
          onClick={() => {
            console.log("should be toggling");
            setShowQuestions();
          }}
        >
          Hide
        </button>
      </span>

      <div className="details-container">
        {questions.map((element) => {
          return (
            <Question
              key={`${element.name}-${element.id}`}
              element={element}
              className="Question"
              onDelete={deleteQuestion}
            />
          );
        })}
      </div>
    </div>
  );
}
