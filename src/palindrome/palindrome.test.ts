import { describe, it, expect } from "vitest";
import { isPalindrome } from "./palindrome";

describe("Palindrome", () => {

  it("should return true for a empty input", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for a single character input", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("should return true for a palindrome word input", () => {
    expect(isPalindrome("aa")).toBe(true);
  });

  it("should return false for a non palindrome word input", () => {
    expect(isPalindrome("ab")).toBe(false);
  });
  
  it("should return true for a palindrome word input (case-sensitive)", () => {
    expect(isPalindrome("Aa")).toBe(true);
  });

  it("should return false for a non palindrome word input (case-sensitive)", () => {
    expect(isPalindrome("Ab")).toBe(false);
  });
  
});
