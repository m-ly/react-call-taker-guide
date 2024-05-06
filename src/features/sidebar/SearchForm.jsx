function SearchForm({ searchValue, setSearchValue }) {
  return (
    <form className="searchform">
      <input
        name="searchForm"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder=" ...search"
        className="rounded"
      />
    </form>
  );
}

export default SearchForm;
