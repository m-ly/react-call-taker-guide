import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteKeyword as deleteKeywordApi } from "../services/apiCallTypes";

export default function useDeleteKeyword() {
  const queryClient = useQueryClient();

  const { mutate: deleteKeyword, isLoading } = useMutation({
    mutationFn: (questionId) => deleteKeywordApi(questionId),
    onSuccess: () => {
      queryClient.invalidateQueries("keywords");
    },
  });

  return { deleteKeyword, isLoading };
}
