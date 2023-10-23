import React from "react";
import addToCart from "./redux/action";
import { useDispatch } from "react-redux";

function Body() {
  const product = {
    name: "soap",
    type: "mobile",
    price: 20,
  };
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div style={{ position: "relative", left: "50px", top: "50px" }}>
      <button onClick={handleCart}>Add To Cart</button>
    </div>
  );
}

export default Body;
