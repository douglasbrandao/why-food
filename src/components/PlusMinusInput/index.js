import React, { useState } from "react";
import { Counter, Main, DownCounter, UpCounter } from "./styles";
import { FaMinus, FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

function PlusMinusInput({ min, max }) {
  const [counter, setCounter] = useState(0);

  function increment() {
    if (counter < max) setCounter(counter + 1);
  }

  function decrement() {
    if (counter !== 0 && counter >= min) setCounter(counter - 1);
  }

  return (
    <Main>
      <DownCounter type="button" onClick={decrement}>
        <FaMinus />
      </DownCounter>
      <Counter value={counter} onChange={() => {}} />
      <UpCounter type="button" onClick={increment}>
        <FaPlus />
      </UpCounter>
    </Main>
  );
}

PlusMinusInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default PlusMinusInput;
