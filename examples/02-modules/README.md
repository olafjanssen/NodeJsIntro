# Voorbeeld: 02-modules

### Wat zijn modules?
Om je code overzichtelijk te houden deel je vaak op in verschilende `.js`-files. In de browser moet je de verschillende files inladen met aparte `<script>` tags in je `index.html` file.

Met Node.js gaat dit een stuk makkelijker; je kan namelijk net als in PHP andere `.js`-files includen met de `require()` functie.

Om het overzichtelijk te houden, noem je meestal je hoofd-JavaScript file `index.js`.

### Simpele code includen
Stukjes code kan je achter elkaar uit laten voeren door deze `.js`-files toe aan te roepen in je hoofd-file met:

```javascript
require('./module1.js');
```

Als je de code bekijkt en straks `index.js` uitvoert zal je zien dat deze module alleen maar een extra regel in de console zet. Het getal `geheim` uit de module kan je echter niets mee doen.

In de praktijk zullen alle modules die je inlaadt, of zelf schrijft een soort libraries zijn: een verzameling functies en variabelen. Hiermee kan je dan bijvoorbeeld een Kinect uitlezen, eenvoudig een Facebook authenticatie doen, of met een database verbinding maken.

```javascript
var mijnModule = require('./module2.js');
```

Deze tweede module is een soort library, zoals je ziet in de code in die file exporteert deze module een functie en variabele in het `module.exports` object:

```javascript
module.exports = {
    add: add,
    lievelingsGetal: lievelingsGetal
};
```

Deze kunnen dan in de hoofdfile worden gebruikt. Probeer maar eens `index.js` uit te voeren:

```bash
node index.js
```

### Klaar!
Mooi, je bent nu klaar om echt gave dingen te `require()`-en in het volgende voorbeeld.