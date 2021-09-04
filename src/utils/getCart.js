import axios from "axios";

const getCart = async (localCart) => {
  try {
    const products = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/products/cart`,
      {
        cart: localCart,
      },
    );
    console.log(products, "products");
    localCart.forEach((ele) => {
      console.log(ele);
      const index = products.data.products.findIndex(
        (ele2) => ele2._id === ele._id,
      );
      console.log(products.data.products[index]);
      products.data.products[index].qty = ele.qty;
      products.data.products[index].option = ele.option;
    });

    return products.data.products;
  } catch (error) {
    console.log(error);
  }
};

export default getCart;
