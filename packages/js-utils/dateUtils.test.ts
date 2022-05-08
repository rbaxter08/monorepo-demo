import { addDays } from "./dateUtils";

describe("dateUtils", () => {
  it("addDays() should add days", () => {
    const result = addDays(new Date("1991-05-08T00:00:00.000Z"), 3);
    expect(result).toMatchSnapshot();
  });
});
