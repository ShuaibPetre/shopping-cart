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
        <Link to="/cart" className="link">
          <FaShoppingCart className="carticon" />
          <div className="cartnum">{number}</div>
        </Link>
      </div>
    </div>
  );
}
