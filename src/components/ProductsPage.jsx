// src/components/ProductsPage.jsx
import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  // Filtrar productos según el buscador y el checkbox de stock
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStock = inStockOnly ? product.inStock : true;
    return matchesSearch && matchesStock;
  });

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>IronStore</h1>

      {/* Iteración de Buscador y Checkbox */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />

      {/* Tabla de productos */}
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
