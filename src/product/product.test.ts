import { describe, it, expect } from "vitest";
import { product } from "./product";

describe("Product of numbers", () => {

  it("should return 1 for no input", () => {
    expect(product()).toBe(1);
  });

  it("should return the number for number", () => {
    expect(product(2)).toBe(2);
  });

  it("should return product of 2 numbers", () => {
    expect(product(2, 3)).toBe(6);
  });

    it("should return product of multiple numbers", () => {
    expect(product(2, 3, 4)).toBe(24);
  });

});