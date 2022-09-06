export const getFullYear = () => {
  return new Date().getFullYear();
};

export const getFooterCopy = (isIndex) => {
  let arg = undefined;
  isIndex ? arg = 'Holberton School' : arg = 'Holberton School main dashboard'
  return arg;
}

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
