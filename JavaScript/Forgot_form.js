document.getElementById('emailButton').addEventListener('click', function(event) {
    var emailDiv = document.getElementById('emailDiv');
    var codeDiv = document.getElementById('codeDiv');
    var emailInput = document.getElementById('email');
    var emailButton = document.getElementById('emailButton');

    emailInput.disabled = true;
    emailDiv.style.backgroundColor = 'gray';
    codeDiv.style.display = 'block';
    emailButton.style.display = 'none';
    // Zde byste měli implementovat logiku pro odeslání ověřovacího kódu na e-mail
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Zde byste měli implementovat logiku pro ověření kódu
});