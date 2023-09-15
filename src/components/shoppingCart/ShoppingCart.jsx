import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Router";
import Header from "../Header";
import CartList from "./CartList";

export default function ShoppingCart() {
  const [show, setShow] = useState(null);
  const { cartItems } = useContext(ShopContext);

  const sum = cartItems.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0,
  );
  const total = sum.toFixed(2);

  useEffect(() => {
    if (cartItems !== null) setShow(cartItems);
    if (cartItems.length === 0) setShow(false);
    return () => {};
  }, [cartItems]);

  return (
    <div className="container">
      <Header />
      <div className="main-cart">
        {!show ? (
          <div className="emptycontainer">
            <h2>YOUR CART IS EMPTY</h2>
            <Link to={"/products"} className="removebutton">
              Shop
            </Link>
          </div>
        ) : (
          <div className="cartsection">
            <div className="cartitems">
              <div className="heading">
                <div className="cart">Your Cart</div>
                <div className="itemno">Items: {cartItems.length}</div>
              </div>
              {show.map((product) => (
                <CartList key={product.id} product={product} />
              ))}
            </div>
            <div className="paymentsection">
              <div className="paymentcard">
                <div className="paypalimg"></div>
                <div className="total">
                  <div className="t1">Your total:</div>
                  <div className="t2">$ {total}</div>
                </div>
                <button
                  className="paybtn"
                  onClick={() =>
                    alert("This is a FAKE website, no payment possible")
                  }
                ></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
