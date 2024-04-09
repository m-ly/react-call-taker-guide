import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getCallTypes } from "../../services/apiCallTypes";

import CallType from "./CallType";

function CallTypeTable({
  showKeywords,
  setShowKeywords,
  showQuestions,
  setShowQuestions,
  setActiveCallType,
}) {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: callTypes,
    error,
  } = useQuery({
    queryKey: ["calltype"],
    queryFn: getCallTypes,
  });

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <table>
      <thead>
        <tr>
          <th>Call Type</th>

          <th colSpan={2}>Show Details</th>
          <th colSpan={2}>Available Actions</th>
        </tr>
      </thead>
      <tbody>
        {callTypes.map((callType) => {
          return (
            <CallType
              key={`type-${callType.id}`}
              callType={callType}
              queryClient={queryClient}
              showQuestions={showQuestions}
              setShowQuestions={setShowQuestions}
              showKeywords={showKeywords}
              setShowKeywords={setShowKeywords}
              setActiveCallType={setActiveCallType}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default CallTypeTable;
