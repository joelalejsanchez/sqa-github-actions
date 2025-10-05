import { assert, describe, expect, test } from "vitest";
import { add, divide, multiply, substract } from "./math";

describe("add", () => {
  test("debe sumar 2 numeros positivos", () => {
    // Arrange -
    const a = 1;
    const b = 2;

    // Act - When
    const result = add(a, b);

    // Assert - Then
    expect(result).toBe(3);
    assert(result === 3, "el resultado no es 2");
  });
  test("debe sumar 2 numeros negativos", () => {
    // Arrange -
    const a = -1;
    const b = -2;

    // Act - When
    const result = add(a, b);

    // Assert - Then
    expect(result).toBe(-3);
    assert(result === -3, "el resultado no es 2");
  });
});
describe("substract", () => {
  test("debe restar 2 numeros positivos", () => {
    // Arrange -
    const a = 1;
    const b = 2;

    // Act - When
    const result = substract(a, b);

    // Assert - Then
    expect(result).toBe(-1);
    assert(result === -1, "el resultado no es -1");
  });
  test("debe restar 2 numeros negativos", () => {
    // Arrange -
    const a = -1;
    const b = -2;

    // Act - When
    const result = substract(a, b);

    // Assert - Then
    expect(result).toBe(1);
    assert(result === 1, "el resultado no es 1");
  });
});
describe("multiply", () => {
  test("debe multiplicar 2 numeros positivos", () => {
    // Arrange -
    const a = 1;
    const b = 2;

    // Act - When
    const result = multiply(a, b);

    // Assert - Then
    expect(result).toBe(2);
    assert(result === 2, "el resultado no es 2");
  });
  test("debe multiplicar 2 numeros negativos", () => {
    // Arrange -
    const a = -1;
    const b = -2;

    // Act - When
    const result = multiply(a, b);

    // Assert - Then
    expect(result).toBe(2);
    assert(result === 2, "el resultado no es 2");
  });
});
describe("divide", () => {
  test("debe dividir 2 numeros positivos", () => {
    // Arrange -
    const a = 1;
    const b = 2;

    // Act - When
    const result = divide(a, b);

    // Assert - Then
    expect(result).toBe(0.5);
    assert(result === 0.5, "el resultado no es 0.5");
  });
  test("debe dividir 2 numeros negativos", () => {
    // Arrange -
    const a = -1;
    const b = -2;

    // Act - When
    const result = divide(a, b);

    // Assert - Then
    expect(result).toBe(0.5);
    assert(result === 0.5, "el resultado no es 0.5");
  });
  test("no debe dividir entre 0", () => {
    // Arrange -
    const a = -1;
    const b = 0;

    // Act - When
    const result = divide(a, b);

    // Assert - Then
    expect(result).toBeNaN();
    assert(isNaN(result), "el resultado no es 0.5");
  });
});
