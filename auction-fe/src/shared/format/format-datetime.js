const FormatDateTime = ({ date }) => {
  // calculate time left
  const days = Math.floor(date / (1000 * 60 * 60 * 24));
  const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((date % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const FormatDateTimeUS = ({ value }) => {
  const date = new Date(value);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return formatter.format(date);
};

export { FormatDateTime, FormatDateTimeUS };
