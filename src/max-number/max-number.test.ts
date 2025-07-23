import { describe, it, expect } from "vitest";
import { maximumNumber } from "./max-number";

describe("Max Number", () => {

  it("should return null for empty array of numbers", () => {
    expect(maximumNumber([])).toBeNull();
  });

  it("should return number for array with single number", () => {
    expect(maximumNumber([1])).toBe(1);
  });

  it("should return maximum number with multiple numbers", () => {
    expect(maximumNumber([1, 2, 5, 3, 7, 5])).toBe(7);
  });

  it("should return maximum number with multiple negative numbers", () => {
    expect(maximumNumber([-1, -2, -5, -3, -7, -5])).toBe(-1);
  });

});
