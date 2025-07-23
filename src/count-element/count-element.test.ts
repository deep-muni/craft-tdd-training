import { describe, it, expect } from "vitest";
import { countElement } from "./count-element";

describe("Count Element", () => {

  it("should return 0 for empty list", () => {
    expect(countElement("deep", [])).toBe(0);
  });

});
