// src/components/ProductTable.jsx
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
    >
      <thead>
        <tr style={{ borderBottom: "2px solid #ccc" }}>
          <th style={{ padding: "10px" }}>Name</th>
          <th style={{ padding: "10px" }}>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id || product.name} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
