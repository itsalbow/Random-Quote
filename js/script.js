// variables for json data to store after ajax call
var quotes = [];


// ready
$(document).ready(function(){
    
    // Ajax request
    $.getJSON( 'http://itsalbow.github.io/js/quotes.json', function( data ){
        
        // pull JSON data and save in quotes array
        $.each(data.quotes, function(index) {
            quotes.push(data.quotes[index]);
        });// end loop
    }).done(function(){ console.log( "Be doin thangz." ) }).fail(function(){ console.log( "getJSON failed") });
    // end getJSON
    
    $('.btn').click(function( e ) {
        var r = random();
        e.preventDefault();
        $('h2').html(quotes[r].quote);
        $('h3').html(quotes[r].author);
    });// end click
        
    
});// end document ready

// random num
var random = function() {
    return Math.round( Math.random() * 18) + 0;
}
