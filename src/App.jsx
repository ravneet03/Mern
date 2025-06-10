import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  // Increment/decrement both counter and date at once
  const increment = () => {
    setCount(count + 1);
    setDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
  };

  const decrement = () => {
    setCount(count - 1);
    setDate(new Date(date.getTime() - 24 * 60 * 60 * 1000));
  };

  // Format date as dd/mm/yyyy
  const formatDate = (d) => {
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Get weekday name
  const dayName = date.toLocaleDateString(undefined, { weekday: "long" });

  return (
    <div className="container">
      <div className="value-list">
        <h2>Counter & Date</h2>
        <div className="value">{count}</div>
        <div className="value">
          {dayName}, {formatDate(date)}
        </div>
      </div>

      <div className="controls" style={{ justifyContent: "center" }}>
        <button onClick={decrement} aria-label="Decrease counter and date">
          -
        </button>
        <button onClick={increment} aria-label="Increase counter and date">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
