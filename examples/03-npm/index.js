/**
 * 03-npm index.js
 *
 * Installeren van modules met npm
 *
 * @author Olaf Janssen (olaf.janssen@fontys.nl)
 */

// Require een bibliotheek die we moeten installeren met npm
var asciify = require('asciify');

/**
 * Hier gebruiken we de ASCII-art library. Let op de zogenaamde callback-functie aan het eind; we weten niet wanneer
 * deze functie aangeroepen wordt, maar als het aangeroepen wordt hebben we het resultaat.
 */
asciify('Cowabunga!', {color:'green'}, function(err, res){
    console.log(res)
});

// Door de callback-functie kan deze tekst getoond worden, voordat de ASCII-art verschijnt.
console.log('Show me first or show me last?');
