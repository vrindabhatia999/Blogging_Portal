function validate(){
    var username=document.getElementById("uname");
    var pass=document.getElementById('pass').value;

     if(username.value.trim()==""){
         alert("Blank username");
         username.style.border="solid 2px red";
         return false;
     }
     else if(pass.trim()==""){
         alert("password cant be blank")
         return false;
     }
     else if(pass.trim().length<5){
         alert("password too short")
         return false;
     }
     else{
         username.style.border="solid 2px green"
         return true;
     }



}
