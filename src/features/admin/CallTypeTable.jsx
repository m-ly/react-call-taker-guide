import { useQuery } from "@tanstack/react-query";
import { getCallTypes } from "../../services/apiCallTypes";

import SearchForm from "../sidebar/SearchForm";
import CallType from "./CallType";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

function CallTypeTable({
  showKeywords,
  setShowKeywords,
  showQuestions,
  setShowQuestions,
  setActiveCallType,
}) {
  const [searchValue, setSearchValue] = useState("");
  const { filteredCallTypes } = useAppContext();
  const {
    isLoading,
    data: callTypes,
    error,
  } = useQuery({
    queryKey: ["calltype"],
    queryFn: getCallTypes,
  });

  const filterTypeBySearch = !searchValue
    ? callTypes
    : callTypes.filter((callType) => {
        return callType.name
          .toLowerCase()
          .includes(searchValue.toLowerCase().trim());
      });

  const currentCallTypes =
    filteredCallTypes.length > 0
      ? filteredCallTypes
      : searchValue
      ? filterTypeBySearch
      : callTypes;

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <div>
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      <table>
        <thead>
          <tr>
            <th>Call Type</th>

            <th colSpan={2}>Show Details</th>
            <th colSpan={2}>Available Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCallTypes.map((callType) => {
            return (
              <CallType
                key={`type-${callType.id}`}
                callType={callType}
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
    </div>
  );
}

export default CallTypeTable;
