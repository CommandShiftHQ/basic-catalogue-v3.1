import React from "react";

import "../styles/product-details.css";

const ProductDetails = () => {
  return (
    <div className="product-details-wrap">
      <div className="product-details">
        <div className="product-details__header">selected product title</div>
        <div className="product-details__body">
          <div className="product-details__column">
            <div>Rating: selected product rating</div>
            <div>Type: selected product type</div>
            <div>Weight: selected product weight</div>
            <div>Price: selected product price</div>
          </div>
          <div className="product-details__column">
            <div>Description: selected product description</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;