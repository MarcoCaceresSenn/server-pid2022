function factorial(n: number): number {
  if (n < 0) throw new Error('Número negativo no es válido para factorial');

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
export { factorial };
