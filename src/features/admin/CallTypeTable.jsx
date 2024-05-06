import { useQuery } from "@tanstack/react-query";
import { getCallTypes } from "../../services/apiCallTypes";

import SearchForm from "../sidebar/SearchForm";
import CallType from "./CallType";
import Spinner from "../components/Spinner";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useAdminContext } from "../../context/AdminContext";
import Plus from "../../assets/plus-circle.svg?react";
import Minus from "../../assets/minus-circle.svg?react";

function CallTypeTable() {
  const { setShowKeywords, setShowQuestions } = useAdminContext();
  const [shadeOpen, setShadeOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeCallType, setActiveCallType] = useState(null);
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

  if (isLoading) return <Spinner />;
  if (error) return <h1>error</h1>;

  return (
    <div>
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />

      <div className="callType-table">
        <h1>Call Type</h1>
        <ul>
          {currentCallTypes.map((callType) => {
            return (
              <div key={callType.id}>
                <li className="callType-row">
                  <div
                    onClick={() => {
                      setActiveCallType(callType);
                      setShadeOpen(!shadeOpen);
                      setShowQuestions(false);
                      setShowKeywords(false);
                    }}
                  >
                    <h1>{callType.name}</h1>

                    <div className="shade-button">
                      {shadeOpen && activeCallType.name === callType.name ? (
                        <Minus className="expand-carat" />
                      ) : (
                        <Plus className="expand-carat" />
                      )}
                    </div>
                  </div>

                  {shadeOpen && activeCallType.name === callType.name && (
                    <CallType callType={callType} />
                  )}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CallTypeTable;
