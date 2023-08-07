function validatePIN(pin) {
    debugger;
  if (isNaN(Number(pin))) return false;
  if (pin.length !== 4 || pin.length !== 6) return false;
  if (!Number.isInteger(pin)) return false;

  return true;
}

console.log(validatePIN("1"));
console.log(validatePIN("12"));
console.log(validatePIN("123"));
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("123456"));
console.log(validatePIN("12d4f6"));
console.log(validatePIN("1234564678"));
