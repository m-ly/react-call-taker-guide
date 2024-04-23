import useDeleteQuestion from "../../hooks/useDeleteQuestion";
import { useAdminContext } from "../../context/AdminContext";
import Question from "./Question";
import useQuestions from "../../hooks/useQuestions";
import Spinner from "../components/Spinner";

export default function QuestionList() {
  const { activeCallType } = useAdminContext();
  const { deleteQuestion, isLoading: isDeleting } = useDeleteQuestion();
  const { questions, isLoading: questionsLoading } = useQuestions(
    activeCallType.id
  );

  if (questionsLoading || isDeleting) return <Spinner />;

  return (
    <div>
      <h1>Questions</h1>

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
  );
}
