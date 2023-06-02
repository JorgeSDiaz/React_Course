import React from "react";
import ReactDOM from "react-dom/client";

import { Post } from "./Post";
// import { Button } from "./Button";
// import UserCard, { Generic } from "./Generic";
// import { Product } from "./Product";
// import { Task } from "./Task";
// import Hello from "./Hello";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function handleClick() {
//   console.log("click");
// }

root.render(
  <>

    <Post />
    {/* <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitted: " + e.target[0].value);
      }}
    >
      <input
        type="text"
        onClick={() => {
          alert("Selected");
        }}
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
    <Button onClick={handleClick} /> */}
    {/* <Hello />
    <Task tittle="Task completed" finished={true}/>
    <Task tittle="Task not completed"/>
    <br/>
    <Generic />
    <UserCard name="Jorge" age={21} isMale={true} />
    <Product producName="Nutella" price={500} description="Esta rica" />
    <Product price={0} /> */}
  </>
);
