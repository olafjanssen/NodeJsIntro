# Voorbeeld: 04-webserver

### Een eenvoudige webserver
In dit voorbeeld gebruiken we een erg vaak gebruikte stapel modules (stack) om een web server met Node.js te bouwen.

* **Express** wordt gebruikt om Node.js als server te gebruiken, deze vangt alle HTTP requests op van een browser.
* **Jade** is een manier om dynamische HTML te genereren (zoals je ook met PHP doet), maar dan in een template-taal.

### Opstarten
Voordat we het voorbeeld kunnen uitproberen moeten we eerst de modules installeren. Omdat dit voorbeeld al een `package.json` heeft, kunnen we direct het volgende doen:

```bash
npm install
``` 

We kunnen nu de applicatie opstarten met:

```bash
node index.js
```

Dan zal er als het goed is verschijnen dat de server luistert op poort 8080. We kunnen nu met de browser naar `localhost:8080` navigeren. Hier krijg je te zien dat de server werkt.

### Drie manieren van content leveren aan de browser
Als je naar de code kijkt in `index.js` dat vind je drie manieren om als server data terug te geven aan de browser, die je alle drie nodig kan hebben.

#### 1. Direct data teruggeven
Je kan direct text terugsturen naar de browser als de gebruiker naar een bepaalde URL toe gaat. In dit geval `/` oftewel de root van de webpagina. Dit gebeurt in de volgende code:

```javascript
app.get('/', function (req, res, next) {
    res.send('De server werkt, maar je bent hier niet welkom!');
});
```

Dit kan je gebruiken om bijvoorbeeld direct JSON data terug te sturen. We zullen dit in het volgende voorbeeld beter doen.

#### 2. Een dynamische template renderen
Net als dat je met PHP vanuit de server met data een HTML pagina genereert en dan pas teruggeeft aan de browser, kan je dat met Node.js doormiddel van Jade templates. Bijvoorbeeld:

```jade
doctype html
html
    head
        title= title
    body
        h1= title
        p Hoe gaat het met je, #{name}?
```

Je herkent de HTML tags hierin, maar de notatie is iets anders, en je kan er variabelen in stoppen die later gevuld worden, hier `title` en `#{name}`. Als je naar `localhost:8080/welkom` navigeert zie je het resultaat hiervan. De JavaScript code die hiervoor zorgt is:

```javascript
app.get('/welkom', function (req, res, next) {
    res.render('welkom', {
        title: 'Mijn pagina',
        name: 'Pino'
    });
});
```

#### 3. Statische data teruggeven
Je kan natuurlijk ook gewoon HTML files, css en JavaScript bestanden aanleveren. In deze code geef je aan dat al deze files in de folder `public` staan.

```javascript
app.use(express.static(path.join(__dirname, '/public')));
``` 

Als je nu navigeert naar bijvoorbeeld `localhost:8080\test.html`, zie je de statisch HTML file die ook een CSS-file inlaadt.

### Klaar!
Vaak wil je echter Node.js niet gebruiken omdat het zo'n puike webserver is, maar wel om data tussen client en server te versturen. De server-code en client-code hoeft niet bij elkaar te zitten. Dit zullen we zien in het volgende voorbeeld over API's.