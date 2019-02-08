import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Quiz } from "./Quiz";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/:index*" component={Quiz} />
    </BrowserRouter>
  );
}
