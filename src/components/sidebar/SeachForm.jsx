function SearchForm({ searchValue, setSearchValue }) {
  return (
    <form>
      <label>Search for a callType:</label>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
