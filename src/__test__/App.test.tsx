/**
 * @jest-environment jsdom
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

describe("App", function () {
  it("should display pass in number", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<App />, container);
    const header = container.querySelector("h1");
    expect(header.textContent).toBe("Hola React");
  });
});
