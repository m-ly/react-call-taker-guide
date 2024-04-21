import { useQuery } from "@tanstack/react-query";
import { getKeywords } from "../services/apiCallTypes";

export default function useKeywords(id) {
  console.log(id);
  const { data: keywords, isLoading } = useQuery({
    queryKey: ["keywords", id],
    queryFn: () => getKeywords(id),
  });

  return { keywords, isLoading };
}
