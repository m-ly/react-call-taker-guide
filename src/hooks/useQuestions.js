import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "../services/apiCallTypes";

export default function useQuestions(id, condition) {
  const { data: questions, isLoading } = useQuery({
    queryKey: ["questions", id],
    queryFn: () => getQuestions(id),
    enabled: !!condition,
  });

  return { questions, isLoading };
}
