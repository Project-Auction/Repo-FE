/* Format Phone number */
const formatPhoneNumber = (value) => {
  if (!value) {
    return value;
  }

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 5) {
    return phoneNumber;
  }

  if (phoneNumberLength < 8) {
    return `${phoneNumber.slice(0, 4)} - ${phoneNumber.slice(4)}`;
  }

  return `${phoneNumber.slice(0, 4)} - ${phoneNumber.slice(
    4,
    7
  )} - ${phoneNumber.slice(7, 10)}`;
};

export const formatIdentityCard = (value) => {
  if (!value) {
    return value;
  }

  const phoneNumber = value.replace(/[^0-9]+/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) {
    return phoneNumber;
  }

  if (phoneNumberLength < 8) {
    return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3)}`;
  }

  return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(
    3,
    6
  )} - ${phoneNumber.slice(6, 9)}`;
};

/* Format date */
const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};

/* Format currency dollar */
const formatCurrency = (value) => {
  let number = Number(value);
  let currency = number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return currency;
};

export { formatDate, formatPhoneNumber, formatCurrency };
