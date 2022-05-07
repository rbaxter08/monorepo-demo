import { addDays } from "./dateUtils";

describe("dateUtils", () => {
  it("addDays() should add days", () => {
    const result = addDays(new Date("05/05/1991"), 3);
    expect(result).toMatchSnapshot();
  });
});
