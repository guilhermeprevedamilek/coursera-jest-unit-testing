const functions = require('./functions')

test('is defined', () => {
  expect(functions.getAge('Rudi', 35)).toBeDefined()
})
