// src/components/SearchBar.jsx
function SearchBar({
  searchQuery,
  setSearchQuery,
  inStockOnly,
  setInStockOnly,
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Search</h3>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          fontSize: "1rem",
        }}
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            style={{ marginRight: "8px" }}
          />
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
