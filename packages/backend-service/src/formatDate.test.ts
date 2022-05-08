import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("formatDate() should format", () => {
    const result = formatDate(new Date("2020-04-13T00:00:00.000+08:00"));
    expect(result).toMatchSnapshot();
  });
});
