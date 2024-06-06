import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addKeyWord as addKeyWordApi } from "../services/apiCallTypes";

export default function useAddKeywords() {
  const queryClient = useQueryClient();

  const { mutate: addKeyWord, isLoading } = useMutation({
    mutationFn: ({ id, keywords }) => {
      return addKeyWordApi(id, keywords);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("keywords");
    },
  });

  return { addKeyWord, isLoading };
}
