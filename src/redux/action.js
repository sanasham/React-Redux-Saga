import { ADD_TO_CART } from "./Constants";
const addToCart = (data) => {
  console.log("addToCart data", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export default addToCart;
