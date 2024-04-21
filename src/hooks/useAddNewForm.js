import { Navigate } from "react-router-dom";
import { createNewGuide } from "../services/apiCallTypes";
import { useQueryClient, useMutation } from "@tanstack/react-query";

function useAddNewForm() {
  const navigate = Navigate();
  const queryClient = useQueryClient();

  const { mutate: createCallGuide, isLoading } = useMutation({
    mutationFn: (questionObj) => createNewGuide(questionObj),
    onSuccess: () => {
      navigate("/admin");
      queryClient.invalidateQueries("calltype");
    },
    onError: (err) => {
      console.log("ERROR", err.message);
      toast.error(err.message);
    },
  });

  return createCallGuide, isLoading;
}

export default useAddNewForm;
