const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search employee..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{ padding: "8px", width: "300px" }}
    />
  );
};

export default SearchBar;

