import React from "react";
import ReactDOM from "react-dom/client";
import { Generic } from "./Generic";
import UserCard from "./Generic";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Generic />
    <UserCard />
  </>
);
