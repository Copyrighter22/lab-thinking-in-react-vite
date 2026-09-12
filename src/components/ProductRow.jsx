// src/components/ProductRow.jsx
function ProductRow({ product }) {
  const textColor = product.inStock ? "black" : "red";

  return (
    <tr style={{ borderBottom: "1px solid #eee" }}>
      <td style={{ padding: "10px", color: textColor }}>{product.name}</td>
      <td style={{ padding: "10px" }}>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
