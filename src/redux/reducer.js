import { ADD_TO_CART, REMOVE_TO_CART } from "./Constants";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart", action);
      return 1 + 1;
    case REMOVE_TO_CART:
      console.log("remove from cart", action);
      return 2 - 1;
    default:
      return "no action called";
  }
};
