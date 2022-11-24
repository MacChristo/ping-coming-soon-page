const email = document.getElementById("email");
const form = document.getElementById("form");
const errorText = document.getElementById("error-text");
const input = document.querySelectorAll(".input")[0];


email.addEventListener("input", function (event) {
    if (email.validity.valid) {
        errorText.textContent = "";
        errorText.style.display = "none"; 
        errorText.className = "error-text";
        email.style.border = "1px solid var(--Pale-Blue--)";
    } else {
        showError();
    }
})


form.addEventListener("submit", function (event) {
    if (!email.validity.valid) {
        showError(); 
        event.preventDefault();
    }
})


function showError() {
    if (email.validity.valueMissing) {
        errorText.textContent = "Whoops! It looks like you forgot to add your email.";
        errorText.style.display = "block"; 
        email.style.border = "1px solid var(--Light-Red--)";
    } else if (email.validity.patternMismatch) {
        errorText.textContent = "Please provide a valid email address.";
        errorText.style.display = "block"; 
        email.style.border = "1px solid var(--Light-Red--)";
    }
}