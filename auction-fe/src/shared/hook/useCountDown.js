import { useEffect, useState } from "react";
import { FormatDateTime } from "../format/format-datetime";

const useCountDown = (dateTime) => {
  /* Convert time input to Date */
  const countDownDate = new Date(dateTime).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const countDownTimer = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(countDownTimer);
  }, [countDownDate]);

  return FormatDateTime(countDown);
};

export default useCountDown;
