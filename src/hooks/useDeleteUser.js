import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuestion } from "../services/apiCallTypes";

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoading } = useMutation({
    mutationFn: (questionId) => deleteQuestion(questionId),
    onSuccess: () => {
      queryClient.invalidateQueries("callType");
    },
  });

  return { deleteUser, isLoading };
}
