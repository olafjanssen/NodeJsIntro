/**
 * 01-helloworld hellointerval.js
 *
 * Basisvoorbeeld voor Node.js, met een interval.
 *
 * @author Olaf Janssen (olaf.janssen@fontys.nl)
 *
 */

// Je kan alle standaard JavaScript dingen doen in je code.
var a = 2 + 3;

console.log('Twee plus drie is ' + a);

// Net als in de browser kan je timers en intervallen zetten.
setInterval(function(){
    console.log('Kiekeboe!');
},1000);

// Omdat de code nooit echt afgelopen is (door de interval-timer), moet je de applicatie zelf met CTRL-C afsluiten.