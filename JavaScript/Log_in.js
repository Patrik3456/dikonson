
var users = {
    "a": "a",
    "v": "v",
    // Přidejte další uživatelská jména a hesla podle potřeby
};

// Přidejte posluchač událostí na odeslání formuláře
    document.getElementById("login-form") 
    .addEventListener("submit", function logIn(event) {
    event.preventDefault(); // Zabránění odeslání formuláře

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Ověření uživatelských údajů
    if (users.hasOwnProperty(username) && users[username] === password) {
        
        window.location.href = "Main_page.html";
    } 
    else {
        alert("Chybné přihlašovací údaje!");
    }
});


