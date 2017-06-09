// @flow

const arr: number[] = [1, 2, 3, 4, 5]

// reduce: (number[]) => number
const reduce =
  (arr, f, init) => {
    let acc = init
    for (let elem of arr) {
      acc = f(acc, elem)
    }
    return acc
  }

const add = (x, y) => x + y
const multiply = (x, y) => x * y

console.log(`acc: ${reduce(arr, multiply, 1)}`)

console.log(arr.reduce(multiply, 1))
console.log(arr.reduce(add, 0))

console.log(arr.map(x => 2 * x))
console.log(arr)
console.log(
  arr
    .map(x => 2 * x)
    .map(y => 2 + y)
    .map('hello'.repeat.bind('hello'))
)

console.log(arr.filter(x => x % 2 === 0))

arr.forEach(elem => {
  console.log(elem)
})
