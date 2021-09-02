import React from "react";
import { ShippingForm, Navbar } from "../../components";

function Shipping(props) {
  console.log(props.location.state, "props");
  const totalPrice = props.location.state.total;
  const cart = props.location.state.cart;
  return (
    <div>
      <Navbar />
      <ShippingForm cart={cart} totalPrice={totalPrice} />
    </div>
  );
}

export default Shipping;
