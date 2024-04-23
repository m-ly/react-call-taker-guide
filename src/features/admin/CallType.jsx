import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { deleteCallType } from "../../services/apiCallTypes";
import { useAdminContext } from "../../context/AdminContext";
import QuestionList from "./QuestionList";
import { useState } from "react";
import CallDetailForm from "./CallDetailForm";
import KeywordsList from "./KeywordsList";

export default function CallType({ callType, shadeOpen }) {
  const queryClient = useQueryClient();
  const [adminList, setAdminList] = useState(false);
  const {
    setShowQuestions,
    showQuestions,
    showKeywords,
    setShowKeywords,
    setActiveCallType,
  } = useAdminContext();
  const { id } = callType;

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCallType,
    onSuccess: () => {
      toast.success("Delete successful!");
      queryClient.invalidateQueries({ queryKey: ["calltype"] });
    },
    onError: (err) => toast.error(err.message),
  });

  {
    return !adminList ? (
      <span>
        <button
          onClick={() => {
            setAdminList(!adminList);
            setActiveCallType(callType);
            setShowQuestions(!setShowQuestions);
          }}
        >
          Show Questions
        </button>

        <button
          onClick={() => {
            setAdminList(!adminList);

            setActiveCallType(callType);
            setShowKeywords(!showKeywords);
          }}
        >
          Show Keywords
        </button>

        <button onClick={() => mutate(id)} disabled={isDeleting}>
          delete
        </button>
        <button>{shadeOpen ? "-" : "+"}</button>
      </span>
    ) : (
      <CallDetailForm>
        {showQuestions && <QuestionList />}
        {showKeywords && <KeywordsList />}
      </CallDetailForm>
    );
  }
}
