import { test, expect } from "@playwright/test";
import { myCalculator } from "../helpers/myCalculator";

test.describe("myCalculator", () => {
  test("add: returns the sum of two numbers", () => {
    expect(myCalculator(3, 5, "add")).toBe(8);
    expect(myCalculator(-2, 7, "add")).toBe(5);
    expect(myCalculator(0, 0, "add")).toBe(0);
  });

  test("subtract: returns the difference of two numbers", () => {
    expect(myCalculator(10, 4, "subtract")).toBe(6);
    expect(myCalculator(3, 7, "subtract")).toBe(-4);
    expect(myCalculator(0, 0, "subtract")).toBe(0);
  });

  test("multiply: returns the product of two numbers", () => {
    expect(myCalculator(3, 4, "multiply")).toBe(12);
    expect(myCalculator(-2, 5, "multiply")).toBe(-10);
    expect(myCalculator(0, 100, "multiply")).toBe(0);
  });

  test("divide: returns the quotient of two numbers", () => {
    expect(myCalculator(10, 2, "divide")).toBe(5);
    expect(myCalculator(7, 2, "divide")).toBe(3.5);
    expect(myCalculator(-9, 3, "divide")).toBe(-3);
  });

  test("divide: throws an error when dividing by zero", () => {
    expect(() => myCalculator(5, 0, "divide")).toThrow(
      "Division by zero is not allowed"
    );
  });
});
