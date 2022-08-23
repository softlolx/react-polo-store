import React, { useState } from "react";

import styles from "./App.module.scss";

import { Header } from "../Header";
import { Main } from "../Main";
import { Cart } from "../Cart";

function App() {
  const [cartOpened, setCartOpened] = useState(false);

  function toggleCartOpen(e) {
    if (e.target === e.currentTarget) {
      setCartOpened((prev) => (prev = !prev));
    }
  }

  return (
    <>
      {cartOpened ? <Cart toggleCart={toggleCartOpen} /> : null}
      <Header toggleCart={toggleCartOpen} />
      <Main />
    </>
  );
}

export default App;
