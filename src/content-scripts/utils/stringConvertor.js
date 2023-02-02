const options = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export const getNumberFormat = (value) => {
  return value.toLocaleString('en', options);
};
