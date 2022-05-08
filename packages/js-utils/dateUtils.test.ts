import { addDays } from "./dateUtils";

describe("dateUtils", () => {
  it("addDays() should add days", () => {
    const result = addDays(new Date("2020-04-13T00:00:00.000+08:00"), 3);
    expect(result).toMatchSnapshot();
  });
});
