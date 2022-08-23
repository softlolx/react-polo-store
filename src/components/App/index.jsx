import React, { useState } from "react";

import styles from "./App.module.scss";

import { Header } from "../Header";
import { Main } from "../Main";
import { Cart } from "../Cart";

function App() {
  const [cartOpened, setCartOpened] = useState(false);

  return (
    <>
      {cartOpened ? <Cart onCartClick={() => setCartOpened((prev) => (prev = !prev))} /> : null}
      <Header onCartClick={() => setCartOpened((prev) => (prev = !prev))} />
      <Main />
    </>
  );
}

export default App;
