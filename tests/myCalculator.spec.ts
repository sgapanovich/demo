import { test, expect } from '@playwright/test';
import { myCalculator, CalculatorAction } from '../helpers/myCalculator';

test.describe('myCalculator', () => {
  test('adds two numbers', () => {
    expect(myCalculator(3, 4, 'add')).toBe(7);
  });

  test('subtracts two numbers', () => {
    expect(myCalculator(10, 3, 'subtract')).toBe(7);
  });

  test('multiplies two numbers', () => {
    expect(myCalculator(3, 4, 'multiply')).toBe(12);
  });

  test('divides two numbers', () => {
    expect(myCalculator(12, 4, 'divide')).toBe(3);
  });

  test('throws on division by zero', () => {
    expect(() => myCalculator(5, 0, 'divide')).toThrow('Division by zero is not allowed');
  });

  test('throws on unknown action at runtime', () => {
    expect(() => myCalculator(1, 2, 'modulo' as CalculatorAction)).toThrow('Unknown action');
  });
});
