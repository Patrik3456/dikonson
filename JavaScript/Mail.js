var sentCode = "123456";

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the code entered by the user
    var enteredCode = document.getElementById('code').value;

    // Compare the entered code with the sent code
    if (enteredCode === sentCode) {
        // The codes match
        alert("Verification successful!");
    } else {
        // The codes do not match
        alert("Invalid verification code. Please try again.");
    }
});