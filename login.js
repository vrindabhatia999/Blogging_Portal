var index =1;
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
var blog=document.getElementById('blogs');
blog.style.backgroundColor='#5bc0de'
var yb=document.getElementById('YourBlog')
yb.style.fontSize='30px'

 
function addToBlog(){


        var area=document.getElementById('area').value;
        var title=document.getElementById('title').value;
        
        blog.innerHTML=blog.innerHTML + "\n"+"<h6>"+"<u>"+index+"."+" "+title+ "</u>"+":"+"</h6>"+"<h6>"+area+"</h6>";
        index++;
        
    }  
       

    
    
    
 
   
     
 