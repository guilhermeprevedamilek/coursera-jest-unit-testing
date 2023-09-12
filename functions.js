const functions = {
  getAge: (name, age) => {
    return `${name} is ${age} years old`
  },

  add: (num1, num2) => num1 + num2,

  isNull: () => null,
  isUndefined: () => undefined,
}

module.exports = functions
