function validateForm(event) {
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;

    if (name.trim() !== '' || email.trim() !== '') {
        window.location.href = "pass 2.html";
    }
    event.preventDefault();
}