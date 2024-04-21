import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuestion as deleteQuestionApi } from "../services/apiCallTypes";

export default function useDeleteQuestion() {
  const queryClient = useQueryClient();

  const { mutate: deleteQuestion, isLoading } = useMutation({
    mutationFn: (questionId) => deleteQuestionApi(questionId),
    onSuccess: () => {
      queryClient.invalidateQueries("callType");
    },
  });

  return { deleteQuestion, isLoading };
}
