import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { data } from "../../utils/poloApi";
import { ThemeContext } from "../context";

import { Header } from "../Header";
import { Main } from "../Main";
import { Card } from "../Card";
import { Cart } from "../Cart";
import { CartItem } from "../CartItem";
import { EmptyCart } from "../EmptyCart";
import { Bookmarks } from "../Bookmarks";
import { OrderDoneCart } from "../OrderDoneCart";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [cartOpened, setCartOpened] = useState(false);
  const [cards, setCards] = useState();
  const [orderCompleted, setOrderCompleted] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [orderSum, setOrderSum] = useState("");
  const [favoritedItems, setFavoritedItems] = useState([]);

  const [searchInputValue, setSearchInputValue] = useState("");

  //getting initial cards on main page
  useEffect(() => {
    (async function () {
      // this is a fake fetch request :)
      setCards(data);
    })();
  });

  //opening and closing cart
  function toggleCartOpen(e) {
    if (e.target === e.currentTarget) {
      setCartOpened((prev) => (prev = !prev));
    }
  }

  function addToCart(id) {
    const card = cards.find((item) => item._id === id);

    if (!cartItems.includes(card)) {
      setCartItems((prev) => [...prev, card]);

      setCards((prev) =>
        prev.map((item) => {
          if (item._id == id) {
            item.addedToCart = true;
          }
          return item;
        })
      );
    } else {
      setCartItems((prev) => prev.filter((item) => item._id !== id));
      setCards((prev) =>
        prev.map((item) => {
          if (item._id == id) {
            item.addedToCart = false;
          }
          return item;
        })
      );
    }
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
    setCards((prev) =>
      prev.map((item) => {
        if (item._id == id) {
          item.addedToCart = false;
        }
        return item;
      })
    );
  }

  function addToFavorite(id) {
    const card = cards.find((item) => item._id === id);

    if (!favoritedItems.includes(card)) {
      setFavoritedItems((prev) => [...prev, card]);

      setCards((prev) =>
        prev.map((item) => {
          if (item._id == id) {
            item.addedToFavorite = true;
          }
          return item;
        })
      );
    } else {
      setFavoritedItems((prev) => prev.filter((item) => item._id !== id));
      setCards((prev) =>
        prev.map((item) => {
          if (item._id == id) {
            item.addedToFavorite = false;
          }
          return item;
        })
      );
    }
  }

  function changeSearchInputValue(evt) {
    setSearchInputValue(evt.target.value);
  }

  useEffect(() => {
    let newOrderSum = 0;
    cartItems.forEach((item) => {
      newOrderSum += item.price;
    });

    setOrderSum(newOrderSum);
  }, [cartItems]);

  function completeOrder() {
    setOrderCompleted(true);
    setCartItems([]);

    setTimeout(() => {
      resetOrder();
    }, 5000);
  }

  function resetOrder() {
    setOrderCompleted(false);
    setCards((prev) =>
      prev.map((item) => {
        item.addedToCart = false;
        return item;
      })
    );
  }

  function toggleTheme() {
    setDarkTheme((prevState) => !prevState);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      {cartOpened ? (
        <Cart
          toggleCart={toggleCartOpen}
          orderSum={orderSum}
          onOrder={completeOrder}
          resetOrder={resetOrder}
        >
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
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
            })
          ) : !orderCompleted ? (
            <EmptyCart />
          ) : (
            <OrderDoneCart resetOrder={resetOrder} />
          )}
        </Cart>
      ) : null}
      <Header toggleCart={toggleCartOpen} orderSum={orderSum} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              searchInputValue={searchInputValue}
              changeSearchInputValue={changeSearchInputValue}
            >
              {cards?.map((item) => {
                return (
                  <Card
                    key={item._id}
                    id={item._id}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    price={item.price}
                    isAddedToCart={item.addedToCart}
                    isFavorited={item.addedToFavorite}
                    addToFavorite={addToFavorite}
                    addToCart={addToCart}
                  />
                );
              })}
            </Main>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Bookmarks>
              {favoritedItems?.map((item) => {
                return (
                  <Card
                    key={item._id}
                    id={item._id}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    price={item.price}
                    isAddedToCart={item.addedToCart}
                    isFavorited={item.addedToFavorite}
                    addToFavorite={addToFavorite}
                    addToCart={addToCart}
                  />
                );
              })}
            </Bookmarks>
          }
        />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
