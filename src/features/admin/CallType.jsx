import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

import QuestionList from "./QuestionList";
import KeywordsList from "./KeywordsList";
import { deleteCallType as deleteCallTypeApi } from "../../services/apiCallTypes";
import { useAdminContext } from "../../context/AdminContext";
import trash from "../../assets/trash.png";

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

  const { isLoading: isDeleting, mutate: deleteCallType } = useMutation({
    mutationFn: deleteCallTypeApi,
    onSuccess: () => {
      toast.success("Delete successful!");
      queryClient.invalidateQueries({ queryKey: ["calltype"] });
    },
    onError: (err) => toast.error(err.message),
  });

  console.log("show questions:", showQuestions, "show keywords:", showKeywords);

  {
    return (
      <div className="callType-row">
        <div
          onClick={() => {
            setAdminList(!adminList);
            setActiveCallType(callType);
            setShowQuestions();
          }}
        >
          Questions
          {showQuestions && <QuestionList onToggle={setShowQuestions} />}
        </div>

        <div
          onClick={() => {
            setAdminList(!adminList);
            setActiveCallType(callType);
            setShowKeywords();
          }}
        >
          Keywords
          {showKeywords && <KeywordsList setShowKeywords={setShowKeywords} />}
        </div>

        <div onClick={() => deleteCallType(id)} disabled={isDeleting}>
          <img src={trash} style={{ width: 10 }} />
        </div>
      </div>
    );
  }
}
