function validate(validationObject, data) {
  /* Implementation intructions provided during the pair programming */
  if (!validationObject) {
    return false;
  }
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      let response = false;
      validationObject.forEach((validator) => {
        if (
          key == validator.fieldName &&
          typeof element == validator.fieldType
        ) {
          response = true;
        }
      });
      if (!response) {
        return response;
      }
    }
  }
  return false;
}

module.exports = validate;
