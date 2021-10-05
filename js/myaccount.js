const form = document.querySelector("#accountForm");
const userName = document.querySelector("#userName");
const userNameError = document.querySelector("#userNameError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(userName.value, 6) === true) {
        userNameError.style.display = "none";
    } else {
        userNameError.style.display = "block";
    }

    if (checkLength(password.value, 3) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }
    console.log("Form Submitted");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

