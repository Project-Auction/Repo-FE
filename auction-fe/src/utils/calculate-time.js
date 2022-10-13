import moment from "moment";
import { useEffect, useState } from "react";

const CalculateBetweenTwoDate = (firstDate, endDate) => {
  const [remainingTime, setRemainingTime] = useState();

  useEffect(() => {
    /* yyyy mm dd hh:mm:ss */
    const fDateMoment = moment(firstDate);
    const eDateMoment = moment(endDate);

    var duration = moment.duration(eDateMoment.diff(fDateMoment));

    const days = duration.days() === 0 ? "" : duration.days();

    const hours =
      duration.hours() < 10 ? "0" + duration.hours() : duration.hours();

    const minutes =
      duration.minutes() < 10 ? "0" + duration.minutes() : duration.minutes();

    const seconds =
      duration.seconds() < 10 ? "0" + duration.seconds() : duration.seconds();

    const resultTime = days + " " + hours + ":" + minutes + ":" + seconds;

    setRemainingTime(resultTime);
  }, [firstDate, endDate]);
  return { remainingTime };
};

export { CalculateBetweenTwoDate };
