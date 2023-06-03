import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "John",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Joseph",
    image: "https://robohash.org/user3",
  },
];

root.render(
  <>
    {users.map((user) => {
      return (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <img src={user.image} alt={user.name} />
        </div>
      );
    })}
  </>
);
