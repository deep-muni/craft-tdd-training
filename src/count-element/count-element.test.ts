import { describe, it, expect } from "vitest";
import { countElement } from "./count-element";

describe("Count Element", () => {

  it("should return 0 for empty list", () => {
    expect(countElement("deep", [])).toBe(0);
  });

    it("should return 1 for list with single element and target matches", () => {
    expect(countElement("deep", ["deep"])).toBe(1);
  });

});
