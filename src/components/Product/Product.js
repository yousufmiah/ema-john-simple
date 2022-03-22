import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  // const { product, handleAddToCart } = props;
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>
          <strong>$ {price}</strong>
        </p>
        <p>
          <strong>Manufacturer: </strong>
          {seller}
        </p>
        <p>
          <strong>Ratings: </strong>
          {ratings}
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
