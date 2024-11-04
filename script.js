document.addEventListener('DOMContentLoaded', () => {
  const emailForm = document.getElementById('emailForm');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  emailForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting to a server

    const email = emailInput.value.trim();
    if (validateEmail(email)) {
      showSuccess();
    } else {
      showError('Please enter a valid email address.');
    }
  });

  function validateEmail(email) {
    // Simple email validation
    return email.includes('@') && email.includes('.') && email.length > 5;
  }

  function showError(message) {
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    emailInput.classList.add('error');
    emailInput.classList.remove('success');
  }

  function showSuccess() {
    errorMessage.style.display = 'none';
    successMessage.innerText = 'Form submitted successfully!';
    successMessage.style.display = 'block';
    emailInput.classList.remove('error');
    emailInput.classList.add('success');

    // Optional: Hide the form after successful submission
    setTimeout(() => {
      emailForm.style.display = 'none';
    }, 2000); // Hides the form after 2 seconds
  }
});