import React from "react";
import { render, screen } from "@testing-library/react";

import { Home } from "./";

describe("index", () => {
  it("Should render styleguide button", () => {
    render(<Home />);
    expect(screen.getByRole("button")).toBeDefined();
  });
});
