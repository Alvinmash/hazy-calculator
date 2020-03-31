function calculateSwitch(numbers) {
  switch (numbers[1]) {
    case '+':
      return numbers[0] + numbers[2]
    case '-':
      return numbers[0] - numbers[2]
    case '*':
      return numbers[0] * numbers[2]
    case '/':
      return numbers[0] / numbers[2]
    default: return NaN
  }
}
function isUsableValue(value) {
  const operators = ['+', '-', '*', '/']

  return isNum(value) || operators.includes(value)
}
function isNum(value) {
  return !isNaN(value)
}
function isEmptyStringValue(value) {
  return value === ''
}
function calculate(calculationSteps) {
  let numbers = []

  calculationSteps.forEach(calcElements => {
    if (!isEmptyStringValue(calcElements) && isUsableValue(calcElements)) {
      numbers.push(calcElements)
    }
  })

  return calculateSwitch(numbers)
}

module.exports = calculate
