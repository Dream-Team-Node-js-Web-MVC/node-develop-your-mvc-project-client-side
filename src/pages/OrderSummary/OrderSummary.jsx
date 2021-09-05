
import React from 'react'
import { OrderForm, Navbar } from "../../components";

function OrderSummary(props) {
    console.log(props, "order summary");
    
    const { cart, totalPrice, payInfo } = props.location.state;
    const orderInfo = JSON.parse(localStorage.getItem("order-info"));

    return (
        <div>
            <Navbar />
            <OrderForm cart={cart} totalPrice={totalPrice} orderInfo={orderInfo} payInfo={payInfo} />
        </div>
    )
}

export default OrderSummary