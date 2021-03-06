import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Home from "../Home/home";
import Learn from "../Learn/learn";
import "./view.css";
import { Route } from "react-router-dom";

import {
  HOME_ROUTE,
  REGISTER_ROUTE,
  SHOP_ROUTE,
  LEARN_ROUTE,
  NEW_PLANT_ROUTE,
  CART_ROUTE,
  PLANTS_ROUTE,
  ORDER_ROUTE
} from "../../constants";
import Register from "../Register/register";
import ShopPage from "../ShopPage/shopPage";
import AdminNav from "../Header/AdminHeader/adminHeader";
import createPlants from "../CreatePlants";
import Cart from "../Header/CartModal/Cart";
// import Plants from"../Plants/plants"
import Orders from "../Orders/Allorders"
import { getUserCart, getUserInfo } from "../../api";
import Footer from "../../Footer/footer";

const View = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const username = JSON.parse(localStorage.getItem("username"));

  useEffect(() => {
    (async () => {
      console.log("start of use Effect");
      if (username) {
        const userCart = await getUserCart(username);
        if (userCart) {
          console.log("HEADER USE EFFECT USERCART", userCart);
          setCart(userCart);
        }
      }
    })();
  }, []);
  console.log("AFTER USE EFFECT", cart);

  return (
    <div className="body">
      <header className="header">
        <Header
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          user={user}
          setUser={setUser}
          cart={cart}
          setCart={setCart}
        />
        <AdminNav />
      </header>
      <main>
        <Route path={HOME_ROUTE} component={Home} />
        <Route path={REGISTER_ROUTE} component={Register} />
        <Route path={CART_ROUTE}>
          <Cart cart={cart} setCart={setCart} />
        </Route>
        <Route path={LEARN_ROUTE} component={Learn} />
        <Route path={NEW_PLANT_ROUTE} component={createPlants} />
        {/* <Route path={PLANTS_ROUTE} component={Plants} /> */}
        <Route path={SHOP_ROUTE} component={ShopPage} />
        <Route path={ORDER_ROUTE} component={Orders} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default View;
