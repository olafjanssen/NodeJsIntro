/**
 * 02-modules index.js
 *
 * Modules in Node.js met require() en export.
 *
 * @author Olaf Janssen (olaf.janssen@fontys.nl)
 */

// Deze module bevat slechts statische code die uitgevoerd wordt en verdwijnt dan weer.
require('./module1.js');

// Deze module is een soort library, met een functie en variabele die we kunnen oproepen.
var mijnModule = require('./module2');

// Deze functies zijn nu deel van het object `mijnModule` en kan je dus gebruiken.
var som =  mijnModule.add(2,3);
console.log('Mijn lievelingsgetal is ' + mijnModule.lievelingsGetal + ' en niet ' + som);

console.log('Einde van de show!');