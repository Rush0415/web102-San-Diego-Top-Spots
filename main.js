$(document).ready(function() {
    // write your code here
    $.getJSON( "data.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          items.push( "<tr><td>" + val.name + "</td><td>" + val.description + "</td><td><a href='https://www.google.com/maps?q=" + val.location + "'>link</a></td></tr>" );
        });
    
        $('table').append( items );

        });
      });