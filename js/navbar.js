// CONTROLLO DI ACCESSO
function checkAccess() {
    // Controlla lo stato di accesso dell'utente
    var accesso = localStorage.getItem("accesso");
    if (accesso === "true") {
        // L'utente è loggato, mostra il menu a tendina e nascondi Registrati e Login
        document.getElementById("userDropdown").classList.remove("d-none");
        document.getElementById("registratiNav").classList.add("d-none");
        document.getElementById("loginNav").classList.add("d-none");

        // Recupera le informazioni dell'utente dal localStorage
        var utente = JSON.parse(localStorage.getItem("utente"));
        var nomeUtente = utente.nome; // Ottieni il nome dell'utente

        // Aggiorna il testo del menu a tendina con il nome dell'utente
        document.getElementById("userName").textContent = nomeUtente;
    } else {
        // L'utente non è loggato, nascondi il menu a tendina e mostra Registrati e Login
        document.getElementById("userDropdown").classList.add("d-none");
        document.getElementById("registratiNav").classList.remove("d-none");
        document.getElementById("loginNav").classList.remove("d-none");
    }
}

// LOGOUT
function logout() {
    // Rimuovi lo stato di accesso dell'utente dal localStorage
    localStorage.removeItem("accesso");

    // Reindirizza l'utente alla pagina di login
    window.location.href = "./login.html";
}

// Esegui il controllo di accesso all'avvio della pagina
checkAccess();
