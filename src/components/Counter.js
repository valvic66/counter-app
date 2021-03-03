import React, { useState } from "react";
import './Counter.css';

export const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div className="counter-wrapper">
      <div className="counter-field">
        <label htmlFor="counter"></label>
        <input
          type="counter"
          id="counter"
          name="counter"
          value={counterValue}
          size={4}
          readOnly
        />
      </div>
      <button
        className="counter-button"
        onClick={() => setCounterValue(counterValue + 1)}
      >
        Count
      </button>
    </div>
  );
};
