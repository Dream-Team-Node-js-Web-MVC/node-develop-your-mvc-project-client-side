import React from "react";
import Navbar from "../Navbar/Navbar";

function ProductDetail(products) {
  return (
    <div>
      <Navbar />
      {products.products.map((product) => {
        if (products.match.params.id === product._id) {
          return (
            <div key={product._id}>
              <h1>{product.title}</h1>
              <img src={product.images[0]} alt={product.title} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default ProductDetail;
