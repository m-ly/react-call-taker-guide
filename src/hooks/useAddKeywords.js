import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addKeyWords as addKeyWordsApi } from "../services/apiCallTypes";
import { addKeyWord as addKeyWordApi } from "../services/apiCallTypes";

export function useAddKeywords() {
  const queryClient = useQueryClient();

  const { mutate: addKeyWords, isLoading } = useMutation({
    mutationFn: ({ id, keywords }) => {
      return addKeyWordsApi(id, keywords);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("keywords");
    },
  });

  return { addKeyWords, isLoading };
}

export default function useAddKeyword() {
  const queryClient = useQueryClient();

  const { mutate: addKeyWord, isLoading } = useMutation({
    mutationFn: ({ callTypeId, keyword }) => {
      return addKeyWordApi(callTypeId, keyword);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("keywords");
    },
  });

  return { addKeyWord, isLoading };
}
