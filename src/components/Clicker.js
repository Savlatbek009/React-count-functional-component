import React, { useState } from "react";

const Clicker = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const addCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(count - count);
  };
  const deleteCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="clicker">
      <h3>Counter</h3>
      <h3>Count: {count}</h3>
      <button className="btn btn-primary" onClick={addCount}>
        Plus
      </button>
      <button className="btn btn-secondary" onClick={resetCount}>
        Reset
      </button>
      <button className="btn btn-danger" onClick={deleteCount}>
        Minus
      </button>
    </div>
  );
};

export default Clicker;
