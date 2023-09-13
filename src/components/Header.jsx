import { useContext, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Router";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { cartItems } = useContext(ShopContext);
  const [number, setNumber] = useState(0);
  const newnumber = useRef(0);
  useMemo(() => {
    if (cartItems !== null) {
      newnumber.current = 0;
      cartItems.map((product) => {
        console.log(product);
        newnumber.current += product.quantity;
      });
      setNumber(newnumber.current);
    } else setNumber(0);
  }, [cartItems]);
  return (
    <div className="header">
      <h2>The Fake Shop</h2>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/products" className="link">
          Products
        </Link>
        <button className="cart" onClick={() => console.log(cartItems)}>
          <FaShoppingCart />
        </button>
        <div className="cartnumber">{number}</div>
      </div>
    </div>
  );
}
