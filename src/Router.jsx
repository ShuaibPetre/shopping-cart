import { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import ShoppingPage from "./components/shopPage/ShoppingPage";
import ErrorPage from "./errorPage";
import "./Router.css";
import "./index.css";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});
const Router = () => {
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (cartItems == []) {
      console.log("block3");
      const newproduct = { ...product, quantity: 1 };
      setCartItems([...cartItems, newproduct]);
    }
    const isFound = cartItems.some((answer) => {
      if (product.id === answer.id) {
        return true;
      }
      return false;
    });

    console.log(isFound);

    if (isFound == true) {
      console.log("block1");
      const newList = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newList);
    } else {
      console.log("block2");
      const newproduct = { ...product, quantity: 1 };
      setCartItems([...cartItems, newproduct]);
    }

    // const newTodos = todos.filter((t) => t !== todo);
    //setTodos(newTodos);
    console.log(cartItems);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/products",
      element: <ShoppingPage />,
    },
    {
      path: "/cart",
      element: <ShoppingCart />,
    },
  ]);

  return (
    <ShopContext.Provider value={{ products, addToCart, cartItems }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};

export default Router;
