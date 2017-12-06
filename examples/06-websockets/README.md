# Voorbeeld: 06-websockets

### WebSockets
Met WebSockets kan je heel snel grote hoeveelheden data over-en-weer sturen tussen client en server. In plaats van dat de client elke keer om data moet vragen via een AJAX request, is er een open 'berichtenkanaal' waarover de server (en de client) naar elkaar berichten kunnen pushen.

### Opstarten
We installeren alles weer.

```bash
npm install
``` 

We starten de applicatie opstarten met:

```bash
node index.js
```

Dat zal er als het goed is verschijnen dat de server luistert op poort 8080. We kunnen nu met de browser naar `localhost:8080` navigeren. Omdat we een statische pagina `index.html` via een web server hosten zie je meteen de werkende WebSockets.

### Verder
Er is veel meer mogelijk met WebSockets, maar dit is de basis. Kijk vooral naar online voorbeelden.