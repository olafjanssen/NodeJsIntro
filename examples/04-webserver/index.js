/**
 * 04-webserver index.js
 *
 * Een basis webserver met routing, statische content en dynamisch content via Jade templates.
 *
 * Inspiratie voor voorbeeld: http://stackabuse.com/node-js-express-examples-rendered-rest-and-static-websites/
 *
 * @author Olaf Janssen (olaf.janssen@fontys.nl)
 */

// laad benodigde modules in om een web server op te starten, en zet de poort voor onze lokale server op 8080.
var express = require('express'),
    path = require('path'),
    app = express(),
    port = 8080;

// stel in waar Jade de HTML templates kan vinden
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// geef aan dat we statische html pagina's, css, en eventueel client-side javascript in de public folder hebben staan
app.use(express.static(path.join(__dirname, '/public')));

// zwengel de server aan: de server luistert nu naar HTTP requests op de aangegven poort
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});


/**
 * Hieronder volgt de zogenaamde 'router', de lijst met mogelijk URLs waar je op de server naar toe mag navigeren,
 * en welke acties er dan ondernomen moeten worden.
 */

/**
 * als je naar / navigeert, stuur dan een tekstboodschap terug
 * req = het object met informatie over de HTTP request
 * res = het object waarin je het antwoord (response) stopt dat naar de browser gaat
 */
app.get('/', function (req, res, next) {
    res.send('De server werkt, maar je bent hier niet welkom!');
});

// als je naar /welkom navigeert, vul dan de template welkom.jade met de gegeven data en geef dit terug aan de browser
app.get('/welkom', function (req, res, next) {
    res.render('welkom', {
        title: 'Mijn pagina',
        name: 'Pino'
    });
});

