import { describe, it, expect } from "vitest";
import { maximumNumber } from "./max-number";


describe("Max Number", () => {
  
  it("should return undefined to no input", () => {
    expect(maximumNumber()).toBe(undefined);
  });

  it("should return null for empty array of numbers", () => {
    expect(maximumNumber([])).toBe(null);
  });

  it("should return number for array with single number", () => {
    expect(maximumNumber([1])).toBe(1);
  });

  it("should return maximum number with multiple numbers", () => {
    expect(maximumNumber([1, 2, 5, 3, 7, 5])).toBe(7);
  });
  
});
