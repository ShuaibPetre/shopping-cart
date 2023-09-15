import { useContext } from "react";
import { ShopContext } from "../../Router";

export default function CartList(product) {
  const { addToCart, removeFromCart, removeProduct } = useContext(ShopContext);
  return (
    <div className="cartitem" id={product.product.id}>
      <img className="cart-image" src={product.product.image} alt="" />
      <div className="cartdiv">
        <div className="ctitle">{product.product.title}</div>
        <div className="extrainfo">
          <div className="quantity">
            <button
              className="plusbtn"
              onClick={() => addToCart(product.product)}
            >
              +
            </button>
            {product.product.quantity}
            <button
              className="minusbtn"
              onClick={() => removeFromCart(product.product)}
            >
              {" "}
              -
            </button>
          </div>
          <div className="price">$ {product.product.price}</div>
          <button
            className="removebutton"
            onClick={() => removeProduct(product.product)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
