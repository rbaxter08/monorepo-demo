import { Button } from "styleguide";
import { addDays } from "utils";

export function ButtonAndDates() {
  const date = new Date();
  const threeDaysFromNow = addDays(date, 3);

  return (
    <>
      <Button />
      {date.toDateString()}
      <br />
      {threeDaysFromNow.toDateString()}
    </>
  );
}
