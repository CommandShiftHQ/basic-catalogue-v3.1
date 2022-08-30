import React from "react";
import { Link } from "react-router-dom";

import "../styles/product-list.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list__wrap">
      {products.map((product) => {
        return (
          <div key={product.id} className="product-list__item-wrap">
            <div className="product-list__item-header">{product.title}</div>
            <div className="product-list__item-body">
              <div className="product-list__column">
                <div>Product Rating: {product.rating}</div>
                <div>Product type: {product.type}</div>
              </div>
              <div className="product-list__column">
                <div>Description: {product.description}</div>
              </div>
            </div>
            <Link
              className="product-list__item-link"
              to={`product/${product.id}`}
            >
              Details
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
