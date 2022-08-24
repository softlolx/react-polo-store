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

  const [cartItems, setCartItems] = useState([]);
  const [favoritedItems, setFavoritedItems] = useState([]);

  const [searchInputValue, setSearchInputValue] = useState("");

  //getting initial cards on main page
  useEffect(() => {
    (async function () {
      // this is a fake fetch request :)
      setCards(await data);
    })();
  }, []);

  //opening and closing cart
  function toggleCartOpen(e) {
    if (e.target === e.currentTarget) {
      setCartOpened((prev) => (prev = !prev));
    }
  }

  function addToCart(id) {
    let card;
    cards.forEach((item) => {
      if (item._id == id) {
        card = item;
      }
    });

    if (!cartItems.includes(card)) {
      setCartItems((prev) => [...prev, card]);
    } else {
      setCartItems((prev) => prev.filter((item) => item._id !== id));
    }
  }

  function addToFavorite(id) {
    let card;
    cards.forEach((item) => {
      if (item._id == id) {
        card = item;
      }
    });

    if (!favoritedItems.includes(card)) {
      setFavoritedItems((prev) => [...prev, card]);
    } else {
      setFavoritedItems((prev) => prev.filter((item) => item._id !== id));
    }
  }

  function changeSearchInputValue(evt) {
    setSearchInputValue(evt.target.value);
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

      <Main searchInputValue={searchInputValue} changeSearchInputValue={changeSearchInputValue}>
        {cards?.map((item) => {
          return (
            <Card
              key={item._id}
              id={item._id}
              imageUrl={item.imageUrl}
              description={item.description}
              price={item.price}
              addToFavorite={addToFavorite}
              addToCart={addToCart}
            />
          );
        })}
      </Main>
    </>
  );
}

export default App;
