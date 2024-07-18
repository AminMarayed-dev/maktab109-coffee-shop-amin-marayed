export function toLocalDateString(date: Date | string | number): string {
  const options: Intl.DateTimeFormatOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("fa-IR", options);
}

export function toLocalDateStringShort(date: Date | string | number): string {
  return new Date(date).toLocaleDateString("fa-IR");
}
