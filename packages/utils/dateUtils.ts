import { addDays as _addDays } from "date-fns";

function _internalAddDays(date: number | Date, amount: number) {
  return _addDays(date, amount);
}

export function addDays(date: number | Date, amount: number) {
  return _internalAddDays(date, amount);
}
