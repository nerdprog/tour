function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');
    var isValid = true;

    nameError.innerHTML = '';
    emailError.innerHTML = '';
    passwordError.innerHTML = '';

    if (name.trim() === '') {
        nameError.innerHTML = 'Please enter your name.';
        isValid = false;
    }

    if (email.trim() === '') {
        emailError.innerHTML = 'Please enter your email.';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = 'Please enter a valid email address.';
        isValid = false;
    }

    if (password.trim() === '') {
        passwordError.innerHTML = 'Please enter your password.';
        isValid = false;
    }

    if (isValid) {
        window.location.href = "mainpage.html";
    }

    return false; // Prevent form submission
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}