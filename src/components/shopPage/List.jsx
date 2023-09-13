import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { ShopContext } from "../../Router";

export default function List(product) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product" id={product.product.id}>
      <img className="image" src={product.product.image} alt="" />
      <div className="ptitle">{product.product.title}</div>
      <div className="price">$ {product.product.price}</div>
      <div className="rating">
        <Rating name="read-only" value={product.product.rating.rate} readOnly />{" "}
        {product.product.rating.rate}({product.product.rating.count})
      </div>
      <button onClick={() => addToCart(product.product)}>ADD TO CART</button>
    </div>
  );
}
