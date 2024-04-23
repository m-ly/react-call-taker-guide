import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getKeywords } from "../services/apiCallTypes";

export default function useKeywords(callTypeId) {
  const queryClient = useQueryClient();

  const { data: keywordsList, isLoading } = useQuery({
    queryKey: ["keywords", callTypeId],
    queryFn: () => getKeywords(callTypeId),
    staleTime: Infinity,
  });

  const refetchKeywords = () => {
    queryClient.invalidateQueries(["keywords", callTypeId]);
  };

  return { keywordsList, isLoading, refetchKeywords };
}
