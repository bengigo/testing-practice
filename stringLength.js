let stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  } else {
    throw 'string should be 1 to 10 characters long';
  }
};

module.exports = stringLength;
