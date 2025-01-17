import React from "react";

function Button({ onClick, label }) {
  return (
    <button onClick={onClick} style={{ margin: "5px", padding: "10px" }}>
      {label}
    </button>
  );
}

export default Button;
