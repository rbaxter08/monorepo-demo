import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("<Button /> should render", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeDefined();
  });
});
