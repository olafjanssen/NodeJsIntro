# Voorbeeld: 05-api

### Een API server
Vaak wil je niet een hele webserver maken, maar alleen data via een (restful) API beschikbaar maken. Dit kan eenvoudig met Node.js en de module `restify`.

Een restful API gebruikt GET, POST (en liefst ook PUT en DELETE) requests om data op te halen en weg te schrijven via leesbare URLs.


### Opstarten
Omdat onze front-end kant niet meer dezelfde server hoeft te zijn als de server-kant, is het gebruikelijk om in ons project een `server` en `client` folder te hebben die de back-end en front-end code scheidt.

Voordat we het voorbeeld kunnen uitproberen moeten we eerst de modules installeren. We gaan naar de `server` folder en installeren alles dat nodig is:

```bash
npm install
``` 

Als we nu de applicatie opstarten met:

```bash
node index.js
```

Dat zal er als het goed is verschijnen dat de server luistert op poort 8080. We kunnen nu met de browser naar `localhost:8080` navigeren. Hier krijg je te zien dat de server werkt, maar we krijgen nog geen data terug.

## End-points
In de code van `index.js` staat aangegeven wat je allemaal kan doen met de API:

```javascript
server.get('/person', getAllPeople);
server.get('/person/:id', getPerson);
server.post('/person', addPerson);
```

Als je navigeert in je browser naar `localhost:8080/person` krijg je een JSON terug met alle personen erin, en als je naar `localhost:8080/person/1` navigeert krijg je alleen de persoon met `id=1` terug. Een POST request kunnen we niet doen via de adresbalk van de browswer.

Gelukkig staat in de `client` folder een simpele pagina die de API gebruikt. Doormiddel van jQuery wordt er data opgevraagd en met een POST naar de API gestuurd.

```javascript
    $.getJSON("http://localhost:8080/person", function (data) {
        // ophalen data
    });
    
    // toevoegen van nieuwe data
    $.post( "http://localhost:8080/person", {name: name}, function( data ) {
    });
```

### Klaar!
Je zie dat je zo een volledige front-end site kan maken met dynamische data in combinatie van een Node.js back-end. De echte kracht zit als je data heen-en-weer kan pushen met WebSockets. Dat is het volgende voorbeeld.