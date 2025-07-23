import { describe, it, expect } from "vitest";
import { fizzbuzz } from "./fizzbuzz";

describe("FizzBuz", () => {

  it("should return 0 when input is 0", () => {
    expect(fizzbuzz(0)).toBe("0");
  });

  it("should return 1 when input is 1", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  it("should return fizz when input is 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  it("should return fizz when input is 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });

});
