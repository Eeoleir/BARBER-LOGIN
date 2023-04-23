// Registration Form
const regForm = document.getElementById("registration-form");

regForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form submission

  const username = document.getElementById("reg-username").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  // Here you can add your registration logic, such as sending a request to a server to create a new user account
  // For this example, we'll just store the username and password in local storage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Registration successful!");
});

// Login Form
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form submission

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Here you can add your authentication logic, such as sending a request to a server to validate the user's credentials
  // For this example, we'll just compare the entered username and password with the values stored in local storage
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect to success page
  } else {
    alert("Invalid username or password.");
  }
});