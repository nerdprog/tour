document.getElementById('signInForm').addEventListener('submit', function(event) {
    var password = document.getElementById('passwordInput').value;
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        alert('Password must contain at least 8 characters including at least one uppercase letter, one number, and one special character.');
        event.preventDefault(); // Prevent the form from submitting
    }
});
