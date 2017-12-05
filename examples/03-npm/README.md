# Voorbeeld: 03-npm

### Externe modules
Om snel functionaliteiten te kunnen toevoegen zal je vaak externe modules nodig hebben.

Probeer maar eens het voorbeeld te runnen:

```bash
node index.js
```

Je zult een foutmelding krijgen, omdat in de code staat:

```javascript
var asciify = require('asciify');
```

Deze library staat niet in onze code, maar kunnen we wel vinden in de lijst van packages van npm, [ziehier](https://www.npmjs.com/package/asciify). Alle Node.js modules zijn hier te vinden, maar vaak vind je ze ook via de bijhorende GitHub repo.

We kunnen de module installeren met de naam die in de `require()` staat:

```bash
npm install asciify
``` 

Wanneer je de code nu runt, zal het werken. Als je in je folder kijkt, zie je dat er nu een `node_modules` folder is aangemaakt met de module er in samen met nog wat andere benodigde modules.

### Modules bijhouden in package.json
Omdat complexere applicaties heel veel externe modules nodig kunnen hebben, is het handig om al deze zogenaamde *dependencies* ergens bij te houden. Dit kan ook met `npm`.

Voer het volgende uit:

```bash
npm init
``` 

Je krijgt een aantal vragen over je applicatie en daarna wordt een `package.json` file aangemaakt. Hierin worden ook je dependencies bijgehouden. Wanneer je nu de externe module opnieuw installeert (bij oude versies is de optie `-s` nodig) zal de module ook in de `package.json' staan.

```bash
npm install -s asciify
``` 

Wanneer je nu de folder `node_modules` weggooit kan je door de `package.json` file alle benodigde modules ook installeren met:

```bash
npm install
```

Dit commando moet je ook uitvoeren als je ergen een voorbeeld van GitHub download om de bijhorende dependencies te downloaden.

### Tips

* Als je `git` gebruikt, zet je deze folder in de `.gitignore` file, zodat je niet alle externe modules in je eigen git repository opslaat.

* In de code zie je een zogenaamde `callback` functie staan. Functies uit modules geven vaak niet direct antwoord, maar pas later en dan roepen ze deze callback-functie aan met het resultaat (of een foutmelding). Dit zie je heel vaak in Node.js modules: alles gaat asynchroon.


### Klaar!
Nu de basis helder is kunnen we echte applicaties gaan bouwen.