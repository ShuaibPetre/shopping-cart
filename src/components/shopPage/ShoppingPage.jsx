import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Router";
import Header from "../Header";
import List from "./List";

export default function ShoppingPage() {
  const { products } = useContext(ShopContext);
  const [show, setShow] = useState(null);
  const uniqueTags = [];
  if (products !== null)
    products.map((img) => {
      if (uniqueTags.indexOf(img.category) === -1) {
        uniqueTags.push(img.category);
      }
    });
  useEffect(() => {
    if (products !== null) setShow(products);
    return () => {};
  }, [products]);

  const handleSection = (e) => {
    console.log(e.target.innerHTML);
    const newList = [];
    products
      .filter((product) => product.category === e.target.innerHTML)
      .map((filteredList) => newList.push(filteredList));
    setShow(newList);
  };
  return (
    <div className="container">
      <Header />
      <div className="shop">
        <div className="sidebar">
          <div className="h3">Catergories</div>
          <button onClick={() => console.log({ show })}>click me</button>
          {uniqueTags.map((tag) => (
            <button key={tag} onClick={handleSection}>
              {tag}
            </button>
          ))}
        </div>
        <div className="cards">
          {!show ? (
            <div>waiting</div>
          ) : (
            show.map((product) => <List key={product.id} product={product} />)
          )}
        </div>
      </div>
    </div>
  );
}
