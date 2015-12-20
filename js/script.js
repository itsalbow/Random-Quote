// variables for json data to store after ajax call
var authors;


// ready
$(document).ready(function(){
    
    var getQuotes = (function(){
        $.ajax({
            url: 'http://itsalbow.github.io/js/quotes.json',
            dataType: "JSON",
            success: function(data){
                return JSON.parse(data);
            }
        });
    })();
    
    var quotes = getQuotes;
    
    console.log(quotes)
    
});
