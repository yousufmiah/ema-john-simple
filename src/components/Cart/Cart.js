import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  // const taxt = (total * 10) / 100;
  const taxt = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + taxt;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: $ {total}</p>
      <p>Total Shipping Charge: $ {shipping}</p>
      <p>Taxt: $ {taxt}</p>
      <h3>
        <strong>Grand Total:</strong> $ {grandTotal}
      </h3>
    </div>
  );
};

export default Cart;
