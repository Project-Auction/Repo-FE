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
const formatCurrentUS = (value) => {
  const number = parseFloat(value);

  return "$" + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

/* Format currency */
const formatCurrency = (value) => {
  if (!value) {
    return value;
  }

  const currencyNumber = value.replace(/[^0-9]+/g, "");
  const currencyNumberLength = currencyNumber.length;
  if (currencyNumberLength < 5) {
    return currencyNumber;
  }

  if (currencyNumberLength === 5) {
    return `${currencyNumber.slice(0, 2)} , ${currencyNumber.slice(2)} VND`;
  }

  if (currencyNumberLength === 6) {
    return `${currencyNumber.slice(0, 3)} , ${currencyNumber.slice(3)} VND`;
  }

  if (currencyNumberLength === 7) {
    return `${currencyNumber.slice(0, 1)} , ${currencyNumber.slice(
      1,
      4
    )} , ${currencyNumber.slice(4)} VND`;
  }

  if (currencyNumberLength === 8) {
    return `${currencyNumber.slice(0, 2)} , ${currencyNumber.slice(
      2,
      5
    )} , ${currencyNumber.slice(5)} VND`;
  }

  return `${currencyNumber.slice(0, 3)} , ${currencyNumber.slice(
    3,
    6
  )} , ${currencyNumber.slice(6, 9)} VND`;
};

export { formatDate, formatPhoneNumber, formatCurrency, formatCurrentUS };
