import React from "react";
import { render, screen } from "@testing-library/react";

import { ButtonAndDates } from "./ButtonAndDates";

describe("index", () => {
  it("Should render styleguide button", () => {
    render(<ButtonAndDates />);
    expect(screen.getByRole("button")).toBeDefined();
  });
});
