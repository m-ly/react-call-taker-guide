import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteCallType } from "../../services/apiCallTypes";

export default function CallType({
  callType,
  queryClient,
  showKeywords,
  setShowKeywords,
  showQuestions,
  setShowQuestions,
  setActiveCallType,
}) {
  const { name, id } = callType;
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCallType,
    onSuccess: () => {
      toast.success("Delete successful!");
      queryClient.invalidateQueries({ queryKey: ["calltype"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>
          <button
            onClick={() => {
              setShowQuestions(!showQuestions);
              setActiveCallType(callType);
            }}
          >
            Show Questions
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              setShowKeywords(!showKeywords);
              setActiveCallType(callType);
            }}
          >
            Show Keywords
          </button>
        </td>
        <td className="deleteCell">
          <button onClick={() => mutate(id)} disabled={isDeleting}>
            delete
          </button>
        </td>
      </tr>

      {/* <Modal
        showModal={showQuestions}
        title="Questions"
        data={callType.questions}
      /> */}
    </>
  );
}
