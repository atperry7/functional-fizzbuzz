// @flow

// range: (number, number) => number[]
const range = (start, end) => {
  // todo
  // for loops allowed
  return Array.from({length: end}, (v, i) => i + start)
}

// type Config = [number, string][]
// config: Config
const config = [
  [3, 'Fizz'],
  [5, 'Buzz'],
  [7, 'Boom'],
  [9, 'Bang'],
  [11, 'Pow']
]

// (config[number, string], number) => boolean
const breakDownOfConfig = (testingOfConfigElement, currentNumberToTest) => {
  if (currentNumberToTest % testingOfConfigElement[0] === 0) {
    return true
  }

  return false
}

// fizzbuzz: (number[], Config) => undefined
const fizzbuzz = (range, config) => {
  const arr = range.map((numberToTest) => { return config.filter(element => breakDownOfConfig(element, numberToTest)) })
  console.log(arr)
}

fizzbuzz(range(1, 115), config)
