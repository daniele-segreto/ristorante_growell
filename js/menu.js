// TABS - SISTEMA A SCHEDE
$( function() {
    $( "#tabs" ).tabs();
});

// MENU'
function addToCart(name, price) {
    // Aggiungi il piatto al carrello
    const cart = document.getElementById("cart");
    const item = document.createElement("li");
    item.textContent = name + " - $" + price;
    cart.appendChild(item);
    
    // Aggiorna il contatore del carrello
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
    
    // Calcola il prezzo totale
    const total = document.getElementById("total");
    const currentTotal = parseFloat(total.textContent.replace("$", ""));
    const newTotal = currentTotal + price;
    total.textContent = "$" + newTotal.toFixed(2);
}

// Resetta Ordine
function resetOrder() {
        // Resetta il carrello e il prezzo totale
        const cart = document.getElementById("cart");
        cart.innerHTML = "";
        const cartCount = document.getElementById("cart-count");
        cartCount.textContent = "0";
        const total = document.getElementById("total");
        total.textContent = "$0.00";
}

// Conferma Ordine
function confirmOrder() {
    // Inizializza il calendario
    $("#calendar").datepicker({
        minDate: 0, // Imposta la data minima come la data corrente
        onSelect: function (dateText) {
            // Ottieni la data selezionata
            var selectedDate = new Date(dateText);
            
            // Imposta l'ora desiderata (esempio: 18:00:00)
            selectedDate.setHours(18, 0, 0);
            
            // Calcola la differenza tra la data selezionata e l'ora corrente
            var timeDiff = selectedDate.getTime() - new Date().getTime();
            
            // Avvia il conto alla rovescia
            startCountdown(timeDiff);
        },
    });
    
    // Mostra il calendario
    $("#calendar").show();
}

// Funzione per avviare il conto alla rovescia
function startCountdown(timeDiff) {
    var countdownElement = $("#countdown");
    
    // Avvia il conto alla rovescia ogni secondo
    var countdownInterval = setInterval(function () {
        // Calcola i giorni, le ore, i minuti e i secondi rimanenti
        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            // Aggiorna il contenuto dell'elemento del conto alla rovescia
            countdownElement.text(
                "Complimenti, il tuo tavolo è stato ordinato. Ci vediamo tra: " +
                days +
                " giorni, " +
                hours +
                " ore, " +
                minutes +
                " minuti e " +
                seconds +
                " secondi!!"
                );
                
                // Sottrai un secondo dal tempo rimanente
                timeDiff -= 1000;
                
                // Se il conto alla rovescia è terminato, interrompi l'intervallo
                if (timeDiff < 0) {
                    clearInterval(countdownInterval);
                    countdownElement.text("Countdown: Expired");
                }
            }, 1000);
        }