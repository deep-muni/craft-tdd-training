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

  it("should return true for a palindrome phrase input", () => {
    expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
  });

  it("should return false for a non palindrome phrase input", () => {
    expect(isPalindrome("Was it a dog or a car I saw")).toBe(false);
  });

  it("should return true for a palindrome phrase input with punctuation", () => {
    expect(isPalindrome("Was it a car, or a cat I saw?")).toBe(true);
  });

  it("should return false for a non palindrome phrase input with punctuation and digit", () => {
    expect(isPalindrome("2Was it a car, or a cat I saw?1")).toBe(false);
  });

  it("should return true for a palindrome phrase input with punctuation and digit", () => {
    expect(isPalindrome("1Was it a car, or a cat I saw?1")).toBe(true);
  });
  
});
