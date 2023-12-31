export function appendZeroToIfLessThan10(number: number) {
  if (number < 10) {
    return `0${number}`;
  }

  return number;
}
