import React from "react";
import axios from "axios";

import CartItem from "../CartItem/CartItem";
import getCart from "../../utils/getCart";


function PaymentForm({ totalPrice, cart, products }) {
  console.log(products, "pay form")
  //! You can get address information from localStorage
  console.log(JSON.parse(localStorage.getItem("order-info")), "Order");
  const makeOrder = async () => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    const orderInfo = JSON.parse(localStorage.getItem("order-info"));

    try {
      await getCart(localCart);
      console.log(await getCart(localCart));
      const order = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/orders`,
        {
          userData: orderInfo,
          cart: await getCart(localCart),
          // total: 0,
        },
      );
      localCart.map((cartItem) =>
        handleEdit(cartItem._id, cartItem.qty, cartItem.option, "stock"),
      );
      console.log("------------------>", order);
    } catch (error) {
      console.log(error, "error");
    }
  };
  const handleEdit = async (id, quantity, option, stock) => {
    try {
      const getStock = products.filter((product) => product._id === id)[0]
        .stock;
      const ordered = quantity * 2 ** Number(option) * 6;
      console.log(ordered, "ordered");
      const updatedStock = getStock - ordered;
      console.log(updatedStock, "stock");
      await axios.patch(
        `${process.env.REACT_APP_API_BASE_URL}/products/stock/${id}`,
        { stock: updatedStock },
      );
    } catch (error) {
      console.log("error = ", error);
    }
  };
  return (
    <div>
      <div>
        <h1>Payment</h1>
      </div>
      <CartItem totalPrice={totalPrice} cart={cart} />
      <button onClick={makeOrder}>finish</button>
    </div>
  );
}

export default PaymentForm;
