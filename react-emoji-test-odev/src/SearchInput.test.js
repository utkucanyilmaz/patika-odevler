import { fireEvent, render, screen, get } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import App from "./App";

describe("Emoji Filtreleme Testi", () => {
  let screenItems;
  beforeEach(() => {
    render(<App />);
    screenItems = screen.getAllByText("Click to copy emoji");
  });
  test("Filtreleme başarılı", () => {
    const smile = "smile";
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: smile } });
    expect(screenItems.length).toBe(20);
  });
});
