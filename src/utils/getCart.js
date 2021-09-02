import axios from "axios";

const getCart = async (localCart) => {
  try {
    const products = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/products/cart`,
      {
        cart: localCart,
      }
    );
    //    localCart.forEach((ele) => {
    //       const index = products.data.products.findIndex(ele2 => ele2._id === ele._id)
    //   products.data.products[index].qty = ele.qty

    //  })
    // console.log(products, "products");
    return products.data.products;
  } catch (error) {
    console.log(error);
  }
};

export default getCart;
