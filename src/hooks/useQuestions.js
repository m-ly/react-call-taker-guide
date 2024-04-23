import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getQuestions } from "../services/apiCallTypes";

export default function useQuestions(callTypeId) {
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
