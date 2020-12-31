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

 
 


    var index = 1

    function deleteOne(row){
    console.log(row.parentNode.parentNode.rowIndex)
    document.querySelector("table").deleteRow(row.parentNode.parentNode.rowIndex)
    
    }
    
    function addToBlog(){
        if(document.getElementById("title").value == "" || document.getElementById("area").value == ""){
          alert("Please Enter Full Details")
        }
        else{
           var name = document.querySelector("#title")
           var phone = document.getElementById("area").value
           var dummy = document.getElementsByTagName("table")
           var table = document.querySelector('table')
    
    
           console.log(dummy)
           console.log(table)
    
           table.innerHTML +=
           `
           <tr>
            <td>${index}</td>
            <td> ${name.value}</td>
            <td>${phone}</td>
            <td><button onclick="deleteOne(this)">Delete</button></td>
            </tr>
           `;
    
           index++;
    
        }
    }
        
 
       

    
    
    
 
   
     
 