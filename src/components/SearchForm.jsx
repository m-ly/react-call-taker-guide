function SearchForm({ searchValue, setSearchValue }) {
  return (
    <form className="">
      <input
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
