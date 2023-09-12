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

test('test isNull', () => {
  expect(functions.isNull()).toBeNull()
})

test('test isUndefined', () => {
  expect(functions.isUndefined()).toBeUndefined()
})

test('zero', () => {
  const z = 0

  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
