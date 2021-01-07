$( ".change" ).on("click", function() { 
    if( $( "body" ).hasClass( "dark" )) { 
        $( "body" ).removeClass( "dark" ); 
        $( ".change" ).text( "OFF" ); 
    } else { 
        $( "body" ).addClass( "dark" ); 
        $( ".change" ).text( "ON" ); 
    } 
}); 
$( ".change1" ).on("click", function() { 
    if( $( "body" ).hasClass( "dark1" )) { 
        $( "body" ).removeClass( "dark1" ); 
        $( ".change1" ).text( "OFF" ); 
    } else { 
        $( "body" ).addClass( "dark1" ); 
        $( ".change1" ).text( "ON" ); 
    } 
}); 