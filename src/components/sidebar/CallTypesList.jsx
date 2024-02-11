import { useState } from "react";
import SearchForm from "./SeachForm";

function CallTypesList({ callTypes, onSelect }) {
  const [searchValue, setSearchValue] = useState("");
  const allCalltypes = Object.keys(callTypes);

  const filteredCallTypes = !searchValue
    ? allCalltypes
    : allCalltypes.filter((callType) =>
        callType.toLowerCase().includes(searchValue.toLowerCase().trim())
      );

  return (
    <div className="sidebar">
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      <ul>
        {filteredCallTypes.map((type) => (
          <li key={type} onClick={() => onSelect(callTypes, type)}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CallTypesList;
