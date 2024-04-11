async function validate(validationObject, data) {
  /* Implementation intructions provided during the pair programming */
  const x = await validationObject();
  console.log(data);
  console.log(x);
  return true;
}

module.exports = validate;
