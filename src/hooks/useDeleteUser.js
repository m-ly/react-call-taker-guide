import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as authDelete } from "../services/apiAuth";

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoading } = useMutation({
    mutationFn: (userId) => authDelete(userId) {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  return { deleteUser, isLoading };
}
