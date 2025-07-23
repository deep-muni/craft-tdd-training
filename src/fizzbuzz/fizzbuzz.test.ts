import { describe, it, expect } from "vitest";
import { fizzbuzz } from "./fizzbuzz";

describe("FizzBuz", () => {

  it.each([
    [0, "0"],
    [1, "1"],
  ])("should return %s when input is %i", (input, expected) => {
    expect(fizzbuzz(input)).toBe(expected);
  });

  it.each([3, 6, 9])("should return fizz for input %i (divisible by 3)", (input) => {
    expect(fizzbuzz(input)).toBe("fizz");
  });

  it.each([5, 10])("should return buzz for input %i (divisible by 5)", (input) => {
    expect(fizzbuzz(input)).toBe("buzz");
  });

  it.each([15, 30, 45])("should return fizzbuzz for input %i (divisible by both 3 and 5)", (input) => {
    expect(fizzbuzz(input)).toBe("fizzbuzz");
  });

});
