import { fireEvent, render, screen, get } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import App from "./App";

describe("Emoji Kopyalandı", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Emoji Kopyalandı", () => {
    const copy = screen.getAllByText("Click to copy emoji").at(0);
    const parent = copy.parentElement;

    expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(
      0
    );
  });
});
