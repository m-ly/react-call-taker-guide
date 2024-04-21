import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateQuestion as updateQuestionApi } from "../services/apiCallTypes";

export function useUpdateQuestion() {
  const queryClient = useQueryClient();
  const { mutate: updateQuestion, isLoading } = useMutation({
    mutationFn: updateQuestionApi,
    onSuccess: () => {
      toast.success("Question Updated");
      queryClient.invalidateQueries("callType");
    },
    onError: (err) => {
      console.log("ERROR", err.message);
      toast.error(err.message);
    },
  });
  return { updateQuestion, isLoading };
}
