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
$( ".j3" ).on("click", function() { 
    if( $( "#j2" ).hasClass( "dark" )) { 
        $( "#j2" ).removeClass( "dark" ); 
        $( ".change1" ).text( "OFF" ); 
    } else { 
        $( "#j2" ).addClass( "dark" ); 
        $( ".change1" ).text( "ON" ); 
    } 
}); 

$( function() {
  $( document ).tooltip();
} );


$("#header").on({
 mouseenter:function(){
    $(this).css("text-shadow","2px 2px 2px purple");
  },
  mouseleave:function(){

    $(this).css("text-shadow","2px 2px 2px white")
  }
});

setInterval(
    function () {
      var j1=document.getElementById("j1");
    
      j1.style.backgroundColor = "#"+ ((1<<24)*(Math.random()+3)|0).toString(16).substr(1);
    },2000);
  

    
function getSize() {
        size = $( "h1" ).css( "font-size" );
        size = parseInt(size, 10);
        $( "#font-size" ).text(  size  );
      }
      
      //get inital font size
getSize();
      
      $( "#up" ).on( "click", function() {
      
        // parse font size, if less than 50 increase font size
        if ((size + 2) <= 50) {
          $( "h1" ).css( "font-size", "+=2" );
          $( "#font-size" ).text(  size += 2 );
        }
      });
      
      $( "#down" ).on( "click", function() {
        if ((size - 2) >= 12) {
          $( "h1" ).css( "font-size", "-=2" );
          $( "#font-size" ).text(  size -= 2  );
        }
      });



function getSize1() {
        size = $( "#resize" ).css( "font-size" );
        size = parseInt(size, 10);
        $( "#font-size" ).text(  size  );
      }
      
      //get inital font size
getSize1();
      
      $( "#up" ).on( "click", function() {
      
        // parse font size, if less than 50 increase font size
        if ((size + 2) <= 50) {
          $( "#resize" ).css( "font-size", "+=2" );
          $( "#font-size" ).text(  size += 2 );
        }
      });
      
      $( "#down" ).on( "click", function() {
        if ((size - 2) >= 12) {
          $( "#resize" ).css( "font-size", "-=2" );
          $( "#font-size" ).text(  size -= 2  );
        }
      });






      var j2=document.getElementById("j2");
  
    j2.style.alignContent="center"
    j2.style.alignItems="center"
j2.style.justifyContent="center";