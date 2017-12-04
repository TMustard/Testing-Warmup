var numbers = [2, 3, 10]

function getSum(number) {
  var sum = 0
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

console.log(getSum(numbers))

module.exports = {
  getSum
}
