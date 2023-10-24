import cart from "./assets/images/cart-image.png";
import "./Cart.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Cart() {
  const result = useSelector((state) => state.cartData);
  console.log("in cart component", result);
  return (
    <div className="Cart_Container">
      <img src={cart} alt="Cart image" /> <span id="cart">0</span>
    </div>
  );
}

export default Cart;
