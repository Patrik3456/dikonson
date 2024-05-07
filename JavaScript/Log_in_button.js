
// Funkce pro načtení stavu přihlášení z localStorage
function loadLoginStatus() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Funkce pro uložení stavu přihlášení do localStorage
function saveLoginStatus(status) {
    localStorage.setItem('isLoggedIn', status);
}

// Funkce pro inicializaci tlačítka podle stavu přihlášení
function initializeLoginButton() {
    const loginButton = document.getElementById('button');
    const isLoggedIn = loadLoginStatus();

    if (isLoggedIn) {
        loginButton.textContent = 'Odhlásit se';
        
    } else {
        loginButton.textContent = 'Přihlásit se';
        
    }
}

// Funkce pro přepnutí stavu přihlášení
function toggleLogin() {
    let isLoggedIn = loadLoginStatus();

    if (isLoggedIn) {
        // Pokud je uživatel přihlášený, odhlásit ho
        saveLoginStatus(false);
    } else {
        // Pokud není uživatel přihlášený, přihlásit ho
        saveLoginStatus(true);
    }

    // Aktualizovat text tlačítka
    initializeLoginButton();
}

// Inicializovat tlačítko při načtení stránky
initializeLoginButton();



// Přidání posluchačů událostí pro formulář
