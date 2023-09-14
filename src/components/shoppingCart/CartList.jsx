export default function CartList(product) {
  return (
    <div className="cartitem" id={product.product.id}>
      <img className="cart-image" src={product.product.image} alt="" />
      <div className="cartdiv">
        <div className="ptitle">{product.product.title}</div>
        <div className="extrainfo">
          <div className="quantity">
            <button>+</button> {product.product.quantity} <button>-</button>
          </div>
          <div className="price">$ {product.product.price}</div>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}
