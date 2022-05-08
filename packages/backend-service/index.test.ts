import { dateFormatService } from ".";

describe("dateFormatService", () => {
  it("dateFormatService() should print the correct date", () => {
    const result = dateFormatService(new Date("1991-05-08T00:00:00.000Z"));
    expect(result).toMatchSnapshot();
  });
});
