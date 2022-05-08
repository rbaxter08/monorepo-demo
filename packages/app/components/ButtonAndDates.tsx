import { addDays } from "utils";
import { Button } from "styleguide";

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
