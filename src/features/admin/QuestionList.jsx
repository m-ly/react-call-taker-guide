import useDeleteQuestion from "../../hooks/useDeleteQuestion";
import { useAdminContext } from "../../context/AdminContext";
import Question from "./Question";
import useQuestions from "../../hooks/useQuestions";
import Spinner from "../components/Spinner";
import { useState } from "react";

export default function QuestionList() {
  const { activeCallType } = useAdminContext();
  const { deleteQuestion, isLoading: isDeleting } = useDeleteQuestion();
  const { questions, isLoading: questionsLoading } = useQuestions(
    activeCallType.id
  );
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  if (questionsLoading || isDeleting) return <Spinner />;

  return (
    <div>
      <ol className="details-container questions">
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
      </ol>

      {showQuestionForm && <input type="text"></input>}

      <button
        onClick={() => {
          setShowQuestionForm(true);
        }}
      >
        Add A New Question
      </button>
    </div>
  );
}
