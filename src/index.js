import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Generic() {
  const user = {
    name: "Jorge",
    age: 21,
    isMale: true
  }

  function sum(a, b) {
    return a + b;
  }

  return (
    <h1>
      {user.name}: {user.age}, {user.isMale ? "👦" : "👧"}, 10 + 25 = {sum(10, 25)}
    </h1>
  );
}

root.render(
  <>
    <Generic />
    <Generic />
  </>
);
