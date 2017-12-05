/**
 * 02-modules module2.js
 *
 * Een echte module (of library) dat functies en variabelen bruikbaar maakt voor index.js.
 *
 * @author Olaf Janssen (olaf.janssen@fontys.nl)
 */

/**
 * Functie die twee getallen optelt. Geheim, behalve als je het 'exporteert', zie einde code.
 *
 * @param a {Number} het eerste getal
 * @param b {Number} het tweede getal
 * @returns {Number} de som van de twee getallen
 */
function add(a, b) {
    return a + b;
}

// Een variabele die in principe geheim is, tenzij ik het 'exporteert', zie einde code.
var lievelingsGetal = 22/7;

// Exporteer de functies en variabelen die je later wilt gebruiken.
module.exports = {
    add: add,
    lievelingsGetal: lievelingsGetal
};
