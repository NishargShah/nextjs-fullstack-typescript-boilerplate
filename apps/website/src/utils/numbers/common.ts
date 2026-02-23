// Convert to fixed decimal number
type ToFixedNumber = (num: number, digits: number, base?: number) => number;

export const toFixedNumber: ToFixedNumber = (num, digits, base = 10) => {
  const pow = base ** digits;

  return Math.round(num * pow) / pow;
};
