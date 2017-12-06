/**
 * 04-api index.js
 *
 * Een basis API met restify
 *
 * @author Olaf Janssen (olaf.janssen@fontys.nl)
 */

// laad de restify module
var restify = require('restify'),
    port = 8080;

// creeër een server met behulp van restify
var server = restify.createServer();

// zorg dat we de data in de body van een POST request ontvangen
server.use(restify.plugins.bodyParser());

// zorg dat je de data ook vanuit andere servers mag benaderen (CORS principe)
server.use(
    function crossOrigin(req,res,next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

server.listen(port, function() {
    console.log('Server listening on port ' + port);
});

/**
 * Dit is weer de 'router' met alle eindpunten van onze API, je ziet dat je op een mooie manier data uit de URL
 * kan meenemen, bijv. :id
 */
server.get('/person', getAllPeople);
server.get('/person/:id', getPerson);
server.post('/person', addPerson);

// test data, uiteindelijk moet dit natuurlijk uit een database komen
var data = [
    {id: 0, name: 'Kraken'},
    {id: 1, name: 'Mad Dog'},
    {id: 2, name: 'Reaper'}
];

/**
 * Functie die alle personen teruggeeft
 */
function getAllPeople(req, res, next) {
    res.send(data);
    next();
}

/**
 * Functie die een persoon met een bepaalde id teruggeeft.
 * NB: via de array index is niet zo netjes, moet eigenlijk met data.filter om het element met de juist id te krijgen.
 */
function getPerson(req, res, next) {
    var person = data[req.params.id];

    res.send(person);
    next();
}

/**
 * Voeg nieuwe persoon toe.
 */
function addPerson(req, res, next) {
    var id = data.length;
    var name = req.body.name;

    data.push( { id: id, name: name});

    res.send('ok');
    next();
}