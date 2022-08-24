import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";
import { data } from "../../utils/poloApi";

import { Header } from "../Header";
import { Main } from "../Main";
import { Card } from "../Card";
import { Cart } from "../Cart";
import { CartItem } from "../CartItem";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cards, setCards] = useState();
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    (async function () {
      // this is a fake fetch request :)
      setCards(await data);
    })();
  }, []);

  function toggleCartOpen(e) {
    if (e.target === e.currentTarget) {
      setCartOpened((prev) => (prev = !prev));
    }
  }

  return (
    <>
      {cartOpened ? (
        <Cart toggleCart={toggleCartOpen}>
          {cartItems?.map((item) => {
            return (
              <CartItem
                key={item._id}
                id={item._id}
                imageUrl={item.imageUrl}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </Cart>
      ) : null}
      <Header toggleCart={toggleCartOpen} />

      <Main>
        {cards?.map((item) => {
          return (
            <Card
              key={item._id}
              id={item._id}
              imageUrl={item.imageUrl}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </Main>
    </>
  );
}

export default App;
