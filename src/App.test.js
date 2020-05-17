import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
  //console.log("ea: app.test.js: render test: container: ", container);
});

test("app accepts firt name input", () => {
  const { getByText, getByTestId } = render(<App />);
  const firstName = getByTestId("firstName");
 
});