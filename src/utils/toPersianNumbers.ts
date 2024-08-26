const farsiDigits: string[] = [
  "۰",
  "۱",
  "۲",
  "۳",
  "۴",
  "۵",
  "۶",
  "۷",
  "۸",
  "۹",
];

export function toPersianNumbersWithComma(n: number | string) {
  const numWithCommas = numberWithCommas(n);
  const persianNumber = toPersianNumbers(numWithCommas);
  return persianNumber;
}

function numberWithCommas(x: number | string): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(n: any): string {
  return String(n).replace(/\d/g, (x: string) => farsiDigits[parseInt(x, 10)]);
}
