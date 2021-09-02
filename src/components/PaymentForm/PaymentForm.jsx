import React from "react";
import CartItem from "../CartItem/CartItem";

function PaymentForm({ totalPrice, cart }) {
  //! You can get address information from localStorage
  console.log(JSON.parse(localStorage.getItem("order-info")));

  return (
    <div>
      <div>
        <h1>Payment</h1>
      </div>
      <CartItem totalPrice={totalPrice} cart={cart} />
    </div>
  );
}

export default PaymentForm;
