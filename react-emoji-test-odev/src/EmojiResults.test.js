import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import App from "./App";

describe("Emoji Listesi Testi", () => {
  let emoji;
  beforeEach(() => {
    render(<App />);
    emoji = screen.getAllByText("Click to copy emoji");
  });

  test("Emojiler Listelendi", () => {
    expect(emoji.length).toEqual(20);
  });
});
