import { useState } from "react";
import History from "./History";

const App = () => {
  // Initial state for counters
  const initialState = {
    left: 0,
    right: 0,
  };

  // State declarations
  const [clicks, setClicks] = useState(initialState);
  const [clickHistory, setHistory] = useState([]);
  const [totalClicks, setTotal] = useState(0);

  // Function to handle increment of left counter
  const increaseByOneLeft = () => {
    const newLeft = clicks.left + 1;
    const newState = { ...clicks, left: newLeft };

    setClicks(newState);
    setHistory((prev) => [...prev, "L"]);
    setTotal(newLeft + clicks.right);

    // Debugging logs
    console.log("New State after Left Click:", newState);
    console.log("Updated Click History:", [...clickHistory, "L"]);
    console.log("Updated Total Clicks:", newLeft + clicks.right);
  };

  // Function to handle increment of right counter
  const increaseByOneRight = () => {
    const newRight = clicks.right + 1;
    const newState = { ...clicks, right: newRight };

    setClicks(newState);
    setHistory((prev) => [...prev, "R"]);
    setTotal(newRight + clicks.left);

    // Debugging logs
    console.log("New State after Right Click:", newState);
    console.log("Updated Click History:", [...clickHistory, "R"]);
    console.log("Updated Total Clicks:", newRight + clicks.left);
  };

  return (
    <div>
      {/* Display counters */}
      <div>
        <span>Left: {clicks.left}</span>
        <button onClick={increaseByOneLeft}>Left</button>
      </div>
      <div>
        <span>Right: {clicks.right}</span>
        <button onClick={increaseByOneRight}>Right</button>
      </div>

      {/* Display click history */}
      <History history={clickHistory} />

      {/* Display total clicks */}
      <div>Total Clicks: {totalClicks}</div>
    </div>
  );
};

export default App;
