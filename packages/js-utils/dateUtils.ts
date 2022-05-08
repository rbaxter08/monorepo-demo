import { addDays as _addDays } from "date-fns";

export function addDays(date: number | Date, amount: number) {
  return _addDays(date, amount);
}
