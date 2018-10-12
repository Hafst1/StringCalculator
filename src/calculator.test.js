const add = require("./calculator");

it("should return zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("should return when only one number is in the string", () => {
  expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
  expect(add("1,2")).toBe(3);
});

it("should summarize multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

it("should add new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

it("should not allow negative numbers and then list them", () => {
  function isNegative() {
    add("2,-4,3,-5");
  }
  expect(isNegative).toThrowError("Negatives not allowed: -4,-5");
});

it("should ignore numbers grater than 1000", () => {
  expect(add("1001,2")).toBe(2);
});