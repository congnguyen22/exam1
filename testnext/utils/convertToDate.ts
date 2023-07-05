const revertStringDDMMYY = value => {
  const res = value.split('/');
  return res[2] + '/' + res[1] + '/' + res[0];
};

export const convertStringToDate = (value: string) => {
  var arrayDate = value.split('/');
  var newDate = arrayDate[1] + '/' + arrayDate[0] + '/' + arrayDate[2];

  return new Date(newDate);
};

export const convertDateToString = (value: Date) => {
  // plus a day
  const startDate = new Date(value);
  const day = 60 * 60 * 24 * 1000;
  const endDate = new Date(startDate.getTime() + day);

  var res = endDate.toISOString().slice(0, 10).replace(/-/g, '/');
  return revertStringDDMMYY(res);
};
