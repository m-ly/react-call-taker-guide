import { useQueryClient, useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries("user");
    },
    onError: (err) => {
      console.log("ERROR", err.message);
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
