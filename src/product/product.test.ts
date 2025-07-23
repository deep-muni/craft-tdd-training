import { describe, it, expect } from "vitest";
import { product } from "./product";

describe("Product of numbers", () => {

  it("should return 1 for no input", () => {
    expect(product()).toBe(1);
  });

});