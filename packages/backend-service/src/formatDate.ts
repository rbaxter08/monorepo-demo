import { addDays } from "utils";

export function formatDate(date: Date) {
  return addDays(date, 3).toDateString();
}
