import { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Router";
import Header from "../Header";
import List from "./List";

export default function ShoppingPage() {
  const { products } = useContext(ShopContext);
  const [show, setShow] = useState(null);
  const uniqueTags = [];
  const [value] = useState(null);

  if (products !== null)
    products.map((item) => {
      if (uniqueTags.indexOf(item.category) === -1) {
        uniqueTags.push(item.category);
      }
    });

  useEffect(() => {
    if (products !== null) setShow(products);
    return () => {};
  }, [products]);

  const handleSection = (e) => {
    console.log(e.target.value);
    const newList = [];
    if (e.target.value === "all") return setShow(products);
    products
      .filter((product) => product.category === e.target.value)
      .map((filteredList) => newList.push(filteredList));
    setShow(newList);
  };
  return (
    <div className="container">
      <Header />
      <div className="shop">
        <div className="sidebar">
          <div>
            {" "}
            <Link to="/" className="homelink">
              Home
            </Link>{" "}
          </div>
          <div>
            {" "}
            <FaAngleRight />{" "}
          </div>
          <div> Product </div>
          <div>
            {" "}
            <FaAngleRight />{" "}
          </div>
          <div>
            <label>
              <select className="select" value={value} onChange={handleSection}>
                <option className="select" key={"all"} value={"all"}>
                  All
                </option>
                {uniqueTags.map((option) => (
                  <option className="select" key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="cards">
          {!show ? (
            <div className="loadinggif"></div>
          ) : (
            show.map((product) => <List key={product.id} product={product} />)
          )}
        </div>
      </div>
    </div>
  );
}
