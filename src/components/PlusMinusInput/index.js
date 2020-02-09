import React, { useState } from "react";
import { Counter, Main, DownCounter, UpCounter } from "./styles";

function PlusMinusInput({ min, max }) {
  const [counter, setCounter] = useState(0);

  function increment() {
    if (counter < max) setCounter(counter + 1);
  }

  function decrement() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <Main>
      <DownCounter onClick={decrement}>-</DownCounter>
      <Counter value={counter} onChange={e => {}} />
      <UpCounter onClick={increment}>+</UpCounter>
    </Main>
  );
}

export default PlusMinusInput;
