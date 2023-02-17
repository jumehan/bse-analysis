import getAge from "../utils/getAge";

/** getAge returns the expected age given a birthdate format 'YYYY-MM-DD' */
describe("getAge", () => {
  it("should return the correct age", () => {
    expect(getAge("1990-01-01")).toEqual(33);
  });
});

describe("getAge", () => {
  it("should return the correct age if month > current month", () => {
    // we are in February and the birthday month is August
    expect(getAge("1989-08-19")).toEqual(33);
  });
});
