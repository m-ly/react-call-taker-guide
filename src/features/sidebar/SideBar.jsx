import { useAppContext } from "../../context/AppContext";
import { useState } from "react";

import SearchForm from "./SearchForm";

function SideBar({ callTypes }) {
  const [searchValue, setSearchValue] = useState("");
  const { filteredCallTypes, handleSetActiveCallType, handleSetForm } =
    useAppContext();

  function handleClick(type) {
    handleSetActiveCallType(type);
    handleSetForm("questionGuide");
  }

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

  return (
    <div className="side-bar">
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      <ul>
        <h2 className="">Call Types</h2>
        {currentCallTypes.map((type) => {
          console.log(type);
          return (
            <li
              className=""
              key={`${type.id}`}
              onClick={() => handleClick(type)}
            >
              {type.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
