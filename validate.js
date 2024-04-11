function validate(validationObject, data) {
  /* Implementation intructions provided during the pair programming */
  if (
    !validationObject ||
    validationObject.length != Object.keys(data).length
  ) {
    return false;
  }
  let response = false;
  for (const key in data) {
    response = false;
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      validationObject.forEach((validator) => {
        if (
          key == validator.fieldName &&
          typeof element == validator.fieldType
        ) {
          response = true;
        }
      });
    }
    if (!response) {
      return response;
    }
  }
  return response;
}

module.exports = validate;
