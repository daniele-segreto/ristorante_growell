// API METEOROLOGICA
$(document).ready(function() {
    // Effettua la chiamata all'API meteorologica
    $.ajax({
        url: 'https://home.openweathermap.org/api_keys', // Sostituisci con l'URL dell'API meteorologica che stai utilizzando
        data: {
            api_key: '04ee93ceb0c5617a6bfaa0404ad6aa78', // Sostituisci con la tua chiave di accesso all'API
            location: 'Città' // Sostituisci con la località per cui desideri ottenere il meteo
        },
        success: function(response) {
            // Aggiorna i dati meteorologici nell'HTML
            var weatherData = response; // Qui assumo che la risposta dell'API sia un oggetto JSON con i dati meteorologici necessari
            
            var weatherElement = document.getElementById('weather-data');
            weatherElement.innerHTML = 'Temperatura: ' + weatherData.temperature + '°C, Condizioni: ' + weatherData.conditions;
        },
        error: function() {
            console.log('Errore durante il recupero dei dati meteorologici');
        }
    });
});