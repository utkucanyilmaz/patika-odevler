import { render, screen, getByTestId } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Header from "./Header.js";

describe("Başlık testi", () => {
  let title;
  beforeEach(() => {
    render(<Header />);
    title = screen.getByTestId("title");
  });

  test("Başlık renderlandı", () => {
    expect(title).toBeInTheDocument();
  });
});
