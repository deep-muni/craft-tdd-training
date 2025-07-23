import { describe, it, expect } from "vitest";
import { maximumNumber } from "./max-number";


describe("Max Number", () => {
  
  it("should return undefined to no input", () => {
    expect(maximumNumber()).toBe(undefined);
  });

});
