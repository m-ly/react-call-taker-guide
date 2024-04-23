import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addKeyWords as addKeyWordsApi } from "../services/apiCallTypes";

export default function useAddKeywords() {
  const queryClient = useQueryClient();

  const { mutate: addKeyWords, isLoading } = useMutation({
    mutationFn: ({ id, keywords }) => {
      addKeyWordsApi(id, keywords);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("keywords");
    },
  });

  return { addKeyWords, isLoading };
}
