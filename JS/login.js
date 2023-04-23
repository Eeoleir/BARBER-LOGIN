const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Here you can add your authentication logic
  if (username === "admin" && password === "1234") {
    window.location.href = "index.html"; // Redirect to success page
  } else {
    alert("Invalid username or password.");
  }
});