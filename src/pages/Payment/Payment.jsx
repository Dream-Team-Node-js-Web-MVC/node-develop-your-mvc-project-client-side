import React from "react";
import { PaymentForm, Navbar } from "../../components";

function Payment(props) {
  const { totalPrice, cart } = props.location.state;
  console.log(totalPrice, "total price from payment");
  console.log(cart, "cart from payment");

  return (
    <div>
      <Navbar />;
      <PaymentForm totalPrice={totalPrice} cart={cart} />
    </div>
  );
}

export default Payment;
