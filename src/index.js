import React from "react";
import ReactDOM from "react-dom/client";
import UserCard, { Generic } from "./Generic";
import { Product } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Generic /> */}
    <UserCard name="Jorge" age={21} isMale={true} />
    <Product producName="Nutella" price={500} description="Esta rica"/>
  </>
);
