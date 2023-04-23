const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');

const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {wrapper.classList.toggle('active');});

signInBtnLink.addEventListener('click', () => {wrapper.classList.toggle('active');});

// show and unshow password


const eyeIcon2 = document.getElementById("eye-icon2");
const passwordInput2 = document.getElementById("reg-password");

eyeIcon2.addEventListener("click", () => {
  if (passwordInput2.type === "password") {
    passwordInput2.type = "text";
    eyeIcon2.classList.remove("fa-eye-slash");
    eyeIcon2.classList.add("fa-eye");
  } else {
    passwordInput2.type = "password";
    eyeIcon2.classList.remove("fa-eye");
    eyeIcon2.classList.add("fa-eye-slash");
  }
});