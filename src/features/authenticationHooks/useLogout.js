import { useNavigate } from "react-router-dom";
import { logOut as logOutApi } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logOut, isLoading } = useMutation({
    mutationFn: logOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { logOut, isLoading };
}
