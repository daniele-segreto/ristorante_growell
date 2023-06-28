// CHAT VIRTUALE
// Aggiungi un listener per il click sul bottone "Send"
document.getElementById('send-button').addEventListener('click', function () {
    // Ottieni il valore del messaggio dall'input
    var messageInput = document.getElementById('message-input');
    var messageContent = messageInput.value.trim();

    // Verifica se il messaggio non è vuoto
    if (messageContent !== '') {
        // Crea gli elementi HTML per visualizzare il messaggio inviato dall'utente
        var messageContainer = document.createElement('div');
        messageContainer.className = 'message';

        var messageSender = document.createElement('div');
        messageSender.className = 'message-sender';
        messageSender.textContent = 'You';

        var messageContentElement = document.createElement('div');
        messageContentElement.className = 'message-content';
        messageContentElement.textContent = messageContent;

        // Aggiungi gli elementi del messaggio inviato dall'utente al container del messaggio
        messageContainer.appendChild(messageSender);
        messageContainer.appendChild(messageContentElement);

        // Ottieni il corpo della chat e aggiungi il messaggio inviato dall'utente al suo interno
        var chatBody = document.querySelector('.chat-body');
        chatBody.appendChild(messageContainer);

        // Aggiungi la risposta dell'assistente virtuale dopo un breve ritardo
        setTimeout(function () {
            // Crea gli elementi HTML per visualizzare la risposta dell'assistente virtuale
            var assistantResponseContainer = document.createElement('div');
            assistantResponseContainer.className = 'message';

            var assistantResponseSender = document.createElement('div');
            assistantResponseSender.className = 'message-sender';
            assistantResponseSender.textContent = 'Assistente Virtuale';

            var assistantResponseContent = document.createElement('div');
            assistantResponseContent.className = 'message-content';
            assistantResponseContent.textContent = getAssistantResponse(messageContent);

            // Aggiungi gli elementi della risposta dell'assistente virtuale al container del messaggio
            assistantResponseContainer.appendChild(assistantResponseSender);
            assistantResponseContainer.appendChild(assistantResponseContent);

            // Aggiungi il messaggio di risposta dell'assistente virtuale al corpo della chat
            chatBody.appendChild(assistantResponseContainer);
        }, 500); // Ritardo di 500 millisecondi (0.5 secondi) per simulare la risposta dell'assistente virtuale

        // Resetta l'input del messaggio
        messageInput.value = '';
    }
});

// Funzione per ottenere la risposta dell'assistente virtuale in base al messaggio dell'utente
function getAssistantResponse(message) {
    var response = '';

    // Logica di risposta personalizzata dell'assistente virtuale
    if (message.toLowerCase().includes('ciao')) {
        response = 'Ciao! Come posso aiutarti oggi?';
    } else if (message.toLowerCase().includes('ordin')) {
        response = 'Accedi alla sezione Menù per ordinare il tuo piatto!';
    } else if (message.toLowerCase().includes('apert')) {
        response = 'Siamo sempre aperti, 24 ore no stop!';
    } else if (message.toLowerCase().includes('dove') || message.toLowerCase().includes('indirizzo') || message.toLowerCase().includes('via')) {
        response = 'Ci troviamo in via Growell!';
    } else if (message.toLowerCase().includes('ore') || message.toLowerCase().includes('ora')) {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        response = 'L\'orario corrente è ' + hours + ':' + minutes + '.';
    } else {
        response = 'Mi scuso, non ho capito. Potresti ripetere, per favore?';
    }

    // Restituisci la risposta dell'assistente virtuale
    return response;
}


// API METEOROLOGICA
// $(document).ready(function() {
// Effettua la chiamata all'API meteorologica
// $.ajax({
//     url: 'https://home.openweathermap.org/api_keys', // Sostituisci con l'URL dell'API meteorologica che stai utilizzando
//     data: {
//         api_key: '04ee93ceb0c5617a6bfaa0404ad6aa78', // Sostituisci con la tua chiave di accesso all'API
//         location: 'Città' // Sostituisci con la località per cui desideri ottenere il meteo
//     },
//     success: function(response) {
// Aggiorna i dati meteorologici nell'HTML
// var weatherData = response; // Qui assumo che la risposta dell'API sia un oggetto JSON con i dati meteorologici necessari

//             var weatherElement = document.getElementById('weather-data');
//             weatherElement.innerHTML = 'Temperatura: ' + weatherData.temperature + '°C, Condizioni: ' + weatherData.conditions;
//         },
//         error: function() {
//             console.log('Errore durante il recupero dei dati meteorologici');
//         }
//     });
// });