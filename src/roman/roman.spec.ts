import { describe, it, expect } from "vitest";
import { parseRomanAsInt, toRoman } from "./roman";

describe("Roman Numerals", () => {

  describe("parseRomanAsInt", () => {

    it("should return 0 for empty string", () => {
      expect(parseRomanAsInt("")).toBe(0);
    });

    it("should return 1 for roman numeral I", () => {
      expect(parseRomanAsInt("I")).toBe(1);
    });

    it("should return 3 for roman numeral III", () => {
      expect(parseRomanAsInt("III")).toBe(3);
    });

  });

  describe("toRoman", () => {

    it("should return empty string for 0", () => {
      expect(toRoman(0)).toBe("");
    });

    it("should return I for number 1", () => {
      expect(toRoman(1)).toBe("I");
    });

    it("should return III for number 3", () => {
      expect(toRoman(3)).toBe("III");
    });

  });

});
