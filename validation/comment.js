const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validatePostInput(data) {
  let errors = {}

  data.text = !isEmpty(data.text) ? data.text : ''

  if(!Validator.isLength(data.text, { min: 2, max: 500 })){
    errors.text = 'Comment must be between 2 and five hundred characters'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}