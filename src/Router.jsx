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
  removeFromCart: () => {},
  removeProduct: () => {},
});
const Router = () => {
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    //first product
    if (cartItems == []) {
      addproduct(product);
    }
    //checking for product in cart
    const isFound = cartItems.some((answer) => {
      if (product.id === answer.id) {
        return true;
      }
      return false;
    });
    if (isFound == true) {
      updateproduct(product);
    } else {
      addproduct(product);
    }
  };
  const removeFromCart = (product) => {
    if (product.quantity > 1) return reduceproduct(product);
    else return removeProduct(product);
  };
  function reduceproduct(product) {
    const newList = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCartItems(newList);
  }
  function removeProduct(product) {
    const newList = cartItems.filter((item) => item !== product);
    setCartItems(newList);
  }
  function addproduct(product) {
    const newproduct = { ...product, quantity: 1 };
    setCartItems([...cartItems, newproduct]);
  }
  function updateproduct(product) {
    const newList = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCartItems(newList);
  }
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
    <ShopContext.Provider
      value={{ products, addToCart, cartItems, removeFromCart, removeProduct }}
    >
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};

export default Router;
