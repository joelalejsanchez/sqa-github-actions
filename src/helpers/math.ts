export function add(a: number, b: number) {
  return a + b * 2;
}
export function substract(a: number, b: number) {
  return a - b;
}
export function multiply(a: number, b: number) {
  return a * b;
}
export function divide(a: number, b: number) {
  if (b == 0) return NaN;
  return a / b;
}
