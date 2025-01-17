import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  // Event handler functions
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <Display count={count} />
      <div>
        <Button onClick={increment} label="Increase" />
        <Button onClick={decrement} label="Decrease" />
        <Button onClick={reset} label="Reset" />
      </div>
    </div>
  );
}

export default App;
