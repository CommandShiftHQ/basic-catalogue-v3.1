import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../styles/product-details.css";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products", { replace: true });
  };

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  if (!selectedProduct) {
    return (
      <>
        <div className="product-details-wrap">
          <div className="product-details">That product doesnt exist</div>
          <button onClick={handleClick}>Go back</button>
        </div>
      </>
    );
  }
  return (
    <div className="product-details-wrap">
      <div className="product-details">
        <div className="product-details__header">{selectedProduct.title}</div>
        <div className="product-details__body">
          <div className="product-details__column">
            <div>Rating: {selectedProduct.rating}</div>
            <div>Type: {selectedProduct.type}</div>
            <div>Weight: {selectedProduct.weight}g</div>
            <div>Price: £{selectedProduct.price.toFixed(2)}</div>
          </div>
          <div className="product-details__column">
            <div>Description: {selectedProduct.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;