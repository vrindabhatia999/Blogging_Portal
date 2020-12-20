function validate(){
    var username=document.getElementById("uname");
    var pass=document.getElementById('pass').value;
    var ul=document.getElementById("ul");
    var pl=document.getElementById('pl')

     if(username.value.trim()==""){
         alert("Blank username");
         username.style.border="solid 2px red";
         ul.style.visibility="visible"
         return false;
     }
     else if(pass.trim()==""){
         alert("password cant be blank")
         pl.style.visibility="visible"
         return false;
     }
     else if(pass.trim().length<5){
         alert("password too short")
         return false;
     }
     
     else{
         username.style.border="solid 2px green"
         pl.style.visibility="hidden"
         return true;
     }



}


function addToBlog(){
    var area=document.getElementById('area').value;
    var blog=document.getElementById('blogs');
    var title=document.getElementById('title').value;

    blog.innerHTML="<h5>"+title+":"+"</h5>"+area;
    
     
}
