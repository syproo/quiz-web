const {
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
} = require("./questions")

describe("findPair", () => {
  test("returns [1, 4] for input [1, 2, 3, 4] and target 5", () => {
    expect(findPair([1, 2, 3, 4], 5)).toEqual([1, 4])
  })

  test("returns [1,7] for input [1, 2, 3, 4] and target 7", () => {
    expect(findPair([1, 2, 3, 4], 7)).toEqual([3,4])
  })
})

describe("reverseString", () => {
  test("returns 'olleh' for input 'hello'", () => {
    expect(reverseString("hello")).toEqual("olleh")
  })

  test("returns '' for empty string input", () => {
    expect(reverseString("")).toEqual("")
  })
})

describe("sumLargest", () => {
  test("returns 7 for input [1, 2, 3, 4]", () => {
    expect(sumLargest([1, 2, 3, 4])).toEqual(7)
  })

  test("returns 9 for input [5, 2, 9, 1]", () => {
    expect(sumLargest([5, 2, 9, 1])).toEqual(14)
  })
})

describe("filterStrings", () => {
  test("returns ['hello', 'howdy'] for input ['hi', 'hello', 'hey', 'howdy']", () => {
    expect(filterStrings(["hi", "hello", "hey", "howdy"])).toEqual([
      "hello",
      "howdy"
    ])
  })

  test("returns [] for input ['a', 'ab', 'abc']", () => {
    expect(filterStrings(["a", "ab", "abc"])).toEqual([])
  })
})

describe("filterEven", () => {
  test("returns [2, 4, 6] for input [1, 2, 3, 4, 5, 6]", () => {
    expect(filterEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6])
  })

  test("returns [] for input [1, 3, 5]", () => {
    expect(filterEven([1, 3, 5])).toEqual([])
  })
})

describe("pluck", () => {
  test("returns ['John', 'Jane'] for input [{name: 'John', age: 30}, {name: 'Jane', age: 25}] and key 'name'", () => {
    expect(
      pluck(
        [
          { name: "John", age: 30 },
          { name: "Jane", age: 25 }
        ],
        "name"
      )
    ).toEqual(["John", "Jane"])
  })

  test("returns [30, 25] for input [{name: 'John', age: 30}, {name: 'Jane', age: 25}] and key 'age'", () => {
    expect(
      pluck(
        [
          { name: "John", age: 30 },
          { name: "Jane", age: 25 }
        ],
        "age"
      )
    ).toEqual([30, 25])
  })
})

describe("isPalindrome", () => {
  test("returns true for input 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true)
  })

  test("returns false for input 'hello'", () => {
    expect(isPalindrome("hello")).toBe(false)
  })
})

// Test for mostFrequent function
describe("mostFrequent", () => {
  test("Returns most frequent character", () => {
    expect(mostFrequent("hello world")).toBe("l")
  })

  test("Returns first character when multiple are equally frequent", () => {
    expect(mostFrequent("abbccc")).toBe("c")
  })
})

// Test for stringLengths function
describe("stringLengths", () => {
  test("Returns array with lengths of strings", () => {
    expect(stringLengths(["hi", "hello", "hey", "howdy"])).toEqual([2, 5, 3, 5])
  })
})

// Test for firstGreater function
describe("firstGreater", () => {
  test("Returns index of first number >= 10", () => {
    expect(firstGreater([1, 5, 15, 20])).toBe(2)
  })

  test("Returns -1 if no number >= 10", () => {
    expect(firstGreater([1, 2, 3, 4])).toBe(-1)
  })
})
