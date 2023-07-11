// REGISTRATI
function registra(event) {
    event.preventDefault(); // Evita il comportamento predefinito del submit del form
    
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confermaPassword = document.getElementById("confermaPassword").value;
    
    // Esegui la validazione dei dati qui...
    
    // Crea un oggetto utente
    let utente = {
        nome: nome,
        cognome: cognome,
        email: email,
        password: password // Aggiungi il campo "password"
    };
    
    // Salva l'utente nel localStorage
    localStorage.setItem("utente", JSON.stringify(utente));
    
    // Reindirizza l'utente alla pagina di login
    window.location.href = "./login.html";
}

document.getElementById("registrazioneForm").addEventListener("submit", registra);


// LOGIN
function accedi(event) {
    event.preventDefault(); // Evita il comportamento predefinito del submit del form
    
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    
    // Recupera le informazioni dell'utente dal localStorage
    let utente = JSON.parse(localStorage.getItem("utente"));
    
    // Verifica le credenziali dell'utente
    if (utente && email === utente.email && password === utente.password) {
        // Salva lo stato di accesso dell'utente nel localStorage
        localStorage.setItem("accesso", "true");
        
        // Reindirizza l'utente alla dashboard o a una pagina successiva
        window.location.href = "./index.html";
    } else {
        alert("Accesso non riuscito. Controlla le tue credenziali.");
    }
}

document.getElementById("loginForm").addEventListener("submit", accedi);


// Nella pagina dashboard.html (o nella pagina successiva dopo il login), controlla lo stato di accesso dell'utente nel localStorage e mostra o nascondi il contenuto appropriato:

// Controlla lo stato di accesso dell'utente
let accesso = localStorage.getItem("accesso");

if (accesso === "true") {
    // Mostra il contenuto della dashboard o della pagina successiva
} else {
    // Reindirizza l'utente alla pagina di login
    window.location.href = "./login.html";
}
