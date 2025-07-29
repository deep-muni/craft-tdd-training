import { describe, it, expect } from "vitest";
import { parseRomanAsInt, toRoman } from "./roman";

describe("Roman Numerals", () => {

  describe("parseRomanAsInt", () => {

    it("should return 0 for empty string", () => {
      expect(parseRomanAsInt("")).toBe(0);
    });

  });

  describe("toRoman", () => {

    it("should return empty string for 0", () => {
      expect(toRoman(0)).toBe("");
    });

  });

});
