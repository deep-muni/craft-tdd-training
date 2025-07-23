import { describe, it, expect } from "vitest";
import { isPalindrome } from "./palindrome";

describe("Palindrome", () => {

  it("should return false for a no input", () => {
    expect(isPalindrome()).toBe(false);
  });

});
