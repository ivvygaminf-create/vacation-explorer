function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const agree = document.getElementById('terms').checked;
    // Remove the line below if you don't have a "disagree" option
    // const disagree = document.getElementById('terms2')?.checked;

    if (!username || !password) {
        alert('Please fill in all fields.');
        event.preventDefault();
        return;
    }
    if (!agree) {
        alert("You must agree to the Terms and Conditions to sign up.");
        event.preventDefault();
        return;
    }
    // Allow form to submit normally
    // If you want to redirect, do it after successful submission on the server or remove event.preventDefault()
});
document.addEventListener('DOMContentLoaded', function() {
    const details = document.getElementById('moreInfo');
    const summary = document.getElementById('summaryText');
    const defaultText = "More Info";
    const openText = "Less Info";

    details.addEventListener('toggle', function() {
        summary.textContent = details.open ? openText : defaultText;
    });
});