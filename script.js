const email = document.getElementById("email").value.trim();
document.getElementsByClassName("email_form").addEventsListener("submit", (event) => {
  event.preventDefault()

  validateInput()
})

const setError = (element, message) => {
  const errorDisplay = element.querySelector(".error");
  errorDisplay.innerText = message;
  element.classList.add("error");
  element.classList.add("success");
}

const setSuccess = (element) => {
  const errorDisplay = element.querySelector(".error")
  errorDisplay.innerText = ""
  element.classList.add("success")
}

validateInput = () => {
  if (email === ''){
    setError(email, "Email is required!")
  } else{

  }
}