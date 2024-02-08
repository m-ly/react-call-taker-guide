import SearchForm from "./SeachForm";

function CallTypesList({ callTypes, onSelect }) {
  const headings = Object.keys(callTypes);

  return (
    <div className="sidebar">
      <SearchForm />
      <ul>
        {headings.map((type) => (
          <li key={type} onClick={() => onSelect(callTypes[type])}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CallTypesList;
