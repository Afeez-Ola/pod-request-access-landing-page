const email = document.getElementById('email').value.trim()
document
  .getElementsByClassName('email_form')
  .addEventsListener('submit', event => {
    event.preventDefault()

    validateInput()
  })

const setError = (element, message) => {
  const errorDisplay = element.querySelector('.error')
  errorDisplay.innerText = message
  element.classList.add('error')
  element.classList.add('success')
}

const setSuccess = element => {
  const errorDisplay = element.querySelector('.error')
  errorDisplay.innerText = ''
  element.classList.add('success')
}
const isValidEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLocaleLowerCase)
}

validateInput = () => {
  if (email === '') {
    setError(email, 'Email is required!')
  } else if (!isValidEmail) {
    setError(email, 'Provide a valid Email.')
  } else {
    setSuccess(email)
  }
}
