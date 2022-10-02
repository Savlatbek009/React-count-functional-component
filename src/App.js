import React, { useState, useEffect } from "react";
import Clicker from "./components/Clicker";

const App = () => {
  const [isClicker, setClicker] = useState(false);
  return (
    <div className="App">
      <h1>React App</h1>
      <button
        onClick={() => setClicker(!isClicker)}
        className="btn btn-primary"
      >
        Toggle shower
      </button>
      <br />
      <br />
      {isClicker && <Clicker />}
      {}
    </div>
  );
};

export default App;
