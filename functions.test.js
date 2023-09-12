const functions = require('./functions')

test('is defined', () => {
  expect(functions.getAge('Rudi', 35)).toBeDefined()
})

test('2 + 2 is equal to 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2

  expect(data).toEqual({ one: 1, two: 2 })
})
