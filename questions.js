// Question 1
// Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers from the array that adds up to the target number. If no such pair is found, the function should return null.
function findPair(numbers, target) {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]]
      }
    }
  }
  return null
}

// Question 2
function reverseString(str) {
  return str.split("").reverse().join("")
}

// Question 3
function sumLargest(numbers) {
  // Your code here
  return numbers.sort((a, b) => b - a).slice(0, 2).reduce((acc, num) => acc + num)
}

// Question 4
function filterStrings(strings) {
  // Your code here
  return strings.filter((str) => str.length > 3)

}

// Question 5
function filterEven(numbers) {
  // Your code here
  return numbers.filter((num) => num % 2 === 0)
}

// Question 6
function pluck(objects, key) {
  // Your code here
  return objects.map((obj) => obj[key])
}

// Question 7
function isPalindrome(str) {
  // Your code here
  return str === str.split("").reverse().join("")
}

// Question 8
// Write a function that takes a string as input and returns the most frequent character in the string. If there are multiple characters that appear with the same frequency, return the one that appears first.
function mostFrequent(str) {
  // Your code here
  // convert array to object
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++
    } else {
      obj[str[i]] = 1
    }
  }
  // find max value
  let max = 0
  let maxChar = ""
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key]
      maxChar = key
    }
  }
  return maxChar
}

// Question 9
function stringLengths(strings) {
  // Your code here
  return strings.map((str) => str.length)
}

// Question 10
function firstGreater(numbers) {
  // Your code here
  return numbers.findIndex((num) => num >= 10)
}

module.exports = {
  findPair,
  reverseString,
  sumLargest,
  filterStrings,
  filterEven,
  pluck,
  isPalindrome,
  mostFrequent,
  stringLengths,
  firstGreater
}
