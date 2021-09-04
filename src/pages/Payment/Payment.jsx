import React from "react";
import { PaymentForm, Navbar } from "../../components";

function Payment(props) {
  const { totalPrice, cart } = props.location.state;
  const products = props.products;
  console.log(totalPrice, "total price from payment");
  console.log(cart, "cart from payment");

  return (
    <div>
      <Navbar />;
      <PaymentForm totalPrice={totalPrice} cart={cart} products={products} />
    </div>
  );
}

export default Payment;
