import useDeleteQuestion from "../../hooks/useDeleteQuestion";
import { useAdminContext } from "../../context/AdminContext";
import Question from "./Question";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getQuestions } from "../../services/apiCallTypes";

export default function QuestionList() {
  const { activeCallType } = useAdminContext();
  const { questions, isLoading } = useQuestions(activeCallType.id);
  const { deleteQuestion, isLoading: isDeleting } = useDeleteQuestion();

  function useQuestions(callTypeId) {
    const queryClient = useQueryClient();

    const { data: questions, isLoading } = useQuery({
      queryKey: ["questions", callTypeId],
      queryFn: () => getQuestions(callTypeId),
      staleTime: Infinity,
    });

    const refetchQuestions = () => {
      queryClient.invalidateQueries(["questions", callTypeId]);
    };

    return { questions, isLoading, refetchQuestions };
  }

  if (isLoading || isDeleting) return <h1>Loading</h1>;

  return (
    <div>
      <h1>Questions</h1>

      <div className="AdminContentContainer">
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
