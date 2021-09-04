import axios from "axios";

const getCart = async (localCart) => {
  try {
    const products = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/products/cart`,
      {
        cart: localCart,
      },
    );

    const cartList = localCart.map((ele) => {
      let productDb = products.data.products.filter(
        (product) => product._id === ele._id,
      );
      const productInCart = {
        ...productDb[0],
        qty: ele.qty,
        option: ele.option,
      };

      return productInCart;
    });

    localCart = cartList;
    return cartList;
  } catch (error) {
    console.log(error);
  }
};

export default getCart;
