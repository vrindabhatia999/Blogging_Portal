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


setInterval(
    function () {
      var j1=document.getElementById("j1");
    
      j1.style.backgroundColor = "#"+ ((1<<24)*(Math.random()+3)|0).toString(16).substr(1);
    },2000);
  
    var j2=document.getElementById("j2");
    j2.style.backgroundColor="#305354"
    j2.style.alignContent="center"
    j2.style.alignItems="center"
    j2.style.justifyContent="center"