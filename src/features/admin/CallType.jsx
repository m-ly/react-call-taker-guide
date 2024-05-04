import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

import QuestionList from "./QuestionList";
import KeywordsList from "./KeywordsList";
import { deleteCallType as deleteCallTypeApi } from "../../services/apiCallTypes";
import { useAdminContext } from "../../context/AdminContext";
import trash from "../../assets/trash.png";
import Minus from "../../assets/minus-circle.svg?react";

export default function CallType({ callType }) {
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

  const { isLoading: isDeleting, mutate: deleteCallType } = useMutation({
    mutationFn: deleteCallTypeApi,
    onSuccess: () => {
      toast.success("Delete successful!");
      queryClient.invalidateQueries({ queryKey: ["calltype"] });
    },
    onError: (err) => toast.error(err.message),
  });

  {
    return (
      <div className="callType-lists">
        <div
          className="callType-header"
          onClick={() => {
            setAdminList(!adminList);
            setActiveCallType(callType);
            setShowQuestions();
          }}
        >
          {showQuestions ? (
            <span>
              Questions <Minus className="expand-carat" />
            </span>
          ) : (
            "Questions..."
          )}
          {showQuestions && <QuestionList />}
        </div>

        <div
          className="callType-header"
          onClick={() => {
            setAdminList(!adminList);
            setActiveCallType(callType);
            setShowKeywords();
          }}
        >
          {showKeywords ? (
            <span>
              Keywords <Minus className="expand-carat" />
            </span>
          ) : (
            "Keywords..."
          )}
          {showKeywords && <KeywordsList />}
        </div>

        <img
          src={trash}
          className="delete"
          onClick={() => deleteCallType(id)}
          disabled={isDeleting}
        />
      </div>
    );
  }
}
