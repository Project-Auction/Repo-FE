import moment from "moment";

export const TYPE_DATE_MONTH = "TYPE_DATE_MONTH";
export const TYPE_DATE_TIME_MONTH = "TYPE_DATE_TIME_MONTH";

const FormatDateTime = ({ date }) => {
  // calculate time left
  const days = Math.floor(date / (1000 * 60 * 60 * 24));
  const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((date % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};


const FormatDateTimeLocal = ({ value, format }) => {
  switch (format) {
    case TYPE_DATE_MONTH:
      return moment(value).format("YYYY-MM-DD");
    case TYPE_DATE_TIME_MONTH:
      return moment(value).format("YYYY-MM-DDTHH:mm");
    default:
      return value;
  }
};

export { FormatDateTime, FormatDateTimeLocal };
