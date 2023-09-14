import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Router";
import Header from "../Header";
import CartList from "./CartList";

export default function ShoppingCart() {
  const [show, setShow] = useState(null);
  const { cartItems } = useContext(ShopContext);

  useEffect(() => {
    if (cartItems !== null) setShow(cartItems);
    return () => {};
  }, [cartItems]);

  return (
    <div className="container">
      <Header />
      <div className="main-cart">
        <div className="cartsection">
          <div className="cartitems">
            <div className="heading">Your Cart</div>
            <div className="itemno">{cartItems.length}</div>
            {!show ? (
              <div>waiting</div>
            ) : (
              show.map((product) => (
                <CartList key={product.id} product={product} />
              ))
            )}
          </div>
          <div className="paymentsection">some stuff here</div>
        </div>
      </div>
    </div>
  );
}
