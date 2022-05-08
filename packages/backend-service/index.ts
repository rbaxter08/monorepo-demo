import { addDays } from "utils";

export function dateFormatService(date: Date) {
  return date.toDateString();
}

function main() {
  dateFormatService(addDays(new Date(), 3));
}

main();
