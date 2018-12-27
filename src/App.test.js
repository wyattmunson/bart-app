import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import NavHeader from "./components/navigation/NavHeader";
it("Navigation header renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
