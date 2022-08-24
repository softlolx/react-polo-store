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
    const card = cards.filter((item) => item._id === id)[0];
    const cardIndex = cards.indexOf(card);

    if (!cartItems.includes(card)) {
      setCartItems((prev) => [...prev, card]);
      setCards((prev) => [...prev, (prev[cardIndex].addedToCart = true)]);
    } else {
      setCartItems((prev) => prev.filter((item) => item._id !== id));
      setCards((prev) => [...prev, (prev[cardIndex].addedToCart = false)]);
    }
  }

  function removeFromCart(id) {
    const card = cards.filter((item) => item._id === id)[0];
    const cardIndex = cards.indexOf(card);

    setCartItems((prev) => prev.filter((item) => item._id !== id));
    setCards((prev) => [...prev, (prev[cardIndex].addedToCart = false)]);
  }

  function addToFavorite(id) {
    const card = cards.filter((item) => item._id === id)[0];

    if (!favoritedItems.includes(card)) {
      setFavoritedItems((prev) => [...prev, card]);
    } else {
      setFavoritedItems((prev) => prev.filter((item) => item._id !== id));
    }
  }

  function changeSearchInputValue(evt) {
    setSearchInputValue(evt.target.value);
    setCards((prev) => prev.filter((item) => item.description.includes(searchInputValue)));
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
                removeFromCart={removeFromCart}
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
              isAddedToCart={item.addedToCart}
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
