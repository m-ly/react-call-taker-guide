import { useAppContext } from "../context/AppContext";
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

  const allCallTypes = Object.keys(callTypes);

  const filterTypeBySearch = !searchValue
    ? allCallTypes
    : allCallTypes.filter((callType) =>
        callType.toLowerCase().includes(searchValue.toLowerCase().trim())
      );

  const currentCallTypes =
    filteredCallTypes.length > 0
      ? filteredCallTypes
      : searchValue
      ? filterTypeBySearch
      : allCallTypes;

  return (
    <div className="side-bar">
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      <ul>
        <h3 className="">Call Types</h3>
        {currentCallTypes.map((type) => (
          <li className="" key={type} onClick={() => handleClick(type)}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
