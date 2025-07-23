import { describe, it, expect } from "vitest";
import { countElement } from "./count-element";

describe("Count Element", () => {

  it("should return 0 for empty list", () => {
    expect(countElement("deep", [])).toBe(0);
  });

  it("should return 1 for list with single element and target matches", () => {
    expect(countElement("deep", ["deep"])).toBe(1);
  });

  it("should return 0 for list with single element and target does not match", () => {
    expect(countElement("deep", ["sneha"])).toBe(0);
  });

  it("should return count for list with multiple element and target is present", () => {
    expect(countElement("deep", ["sneha", "deep", "deep", "sneha"])).toBe(2);
  });

});
