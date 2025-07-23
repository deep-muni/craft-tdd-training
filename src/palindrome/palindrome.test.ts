import { describe, it, expect } from "vitest";
import { isPalindrome } from "./palindrome";

describe("Palindrome", () => {

  it("should return true for a empty input", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for a single character input", () => {
    expect(isPalindrome("a")).toBe(true);
  });

});
