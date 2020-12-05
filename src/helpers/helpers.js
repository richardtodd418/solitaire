export const timeInSeconds = (timeString) => {
  const a = timeString.split(":");

  const seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  return seconds;
};

export const timeStringFromSeconds = (timeInSeconds) =>
  new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

export const capitalize = (string) => {
  const stringArray = string.split("");
  stringArray[0] = stringArray[0].toUpperCase();
  return stringArray.join("");
};
