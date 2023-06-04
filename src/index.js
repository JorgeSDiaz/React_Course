import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 10);
        }}
      >
        Increment
      </button>
      <button onClick={() => setCounter(counter - 10)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
}

function Input() {
  const [value, setValue] = useState("");
  useEffect(() => {console.log("value changed")}, [value]);

  return (
    <>
      <input onChange={e => {setValue(e.target.value)}} type="text" />
      <button onClick={() => console.log(value)}>Save</button>
    </>
  );
}

root.render(
  <>
    <Counter />
    <br/>
    <br/>
    <Input />
  </>
);
