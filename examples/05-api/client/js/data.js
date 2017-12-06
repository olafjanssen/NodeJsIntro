/**
 * Functie die via een AJAX GET request onze API aanroept en alle personen opvraagt.
 */
function getAllPersons() {
    $.getJSON("http://localhost:8080/person", function (data) {
        var people = [];
        $.each(data, function (key, val) {
            people.push("<li>" + val.name + "</li>");
        });

        $('#person-list').html(people.join(''));
    });
}


// wacht tot jQuery en het HTML document geladen is voordat we iets doen
$(function () {
    getAllPersons();

    // als je op de knop klikt voegen we een naam toe via de API
    $('#add-button').click(function(){
        var name = $('#name-box').val();

        $.post( "http://localhost:8080/person", {name: name}, function( data ) {
            // als het gelukt is, halen we de nieuwe lijst aan namen op
            getAllPersons();
        });
    });
});