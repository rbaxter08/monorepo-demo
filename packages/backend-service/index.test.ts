import { dateFormatService } from ".";

describe("dateFormatService", () => {
  it("dateFormatService() should print the correct date", () => {
    const result = dateFormatService(new Date("2020-04-13T00:00:00.000+08:00"));
    expect(result).toMatchSnapshot();
  });
});
