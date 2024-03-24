document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Simple validation
  if (username.trim() === '') {
    showError('Please enter your username.');
    return;
  }
  
  if (password.trim() === '') {
    showError('Please enter your password.');
    return;
  }
  
  // You can add your login authentication logic here
  // For demonstration, let's just log the username and password
  console.log('Username:', username);
  console.log('Password:', password);
  
  // Here, you can redirect the user to another page upon successful login
});

// Function to display error messages
function showError(message) {
  var errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.textContent = message;
  
  var loginContainer = document.querySelector('.login-container');
  loginContainer.appendChild(errorDiv);
  
  // Remove the error message after 3 seconds
  setTimeout(function() {
    errorDiv.remove();
  }, 3000);
}

// Add focus event listeners to input fields for highlighting
var inputFields = document.querySelectorAll('.input-group input');
inputFields.forEach(function(input) {
  input.addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
  });
  input.addEventListener('blur', function() {
    this.parentElement.classList.remove('focused');
  });
});
