var form = document.querySelector("#contactForm");
var firstName = document.querySelector("#firstName");
var firstNameError = document.querySelector("#firstNameError");
var lastName = document.querySelector("#lastName");
var lastNameError = document.querySelector("#lastNameError");
var email = document.querySelector("#email");
var emailError = document.querySelector("#emailError");
var address = document.querySelector("#address");
var addressError = document.querySelector("#addressError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 25) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
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

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function alertbox() {
    alert("Successfully Sent");
}
