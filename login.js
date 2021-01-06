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
        if(document.getElementById("title").value == "" || document.getElementById("textarea").value == ""){
          alert("Please Enter Full Detail")
        }
        else{
           var name = document.querySelector("#title")
           var phone = document.getElementById("textarea").innerHTML;
           var dummy = document.getElementsByTagName("table")
           var table = document.querySelector('table')
    
    
           
    
           table.innerHTML +=
           `
           <tr>
            <td>${index}</td>
            <td style="margin:20px; cursor:pointer" onclick="display(this)" >${name.value}</a></td>
            <td>${phone}</td>
            <td><button onclick="deleteOne(this)" class="btn btn-danger">Delete</button></td>
            <td><button onclick="edit(this)" class="btn btn-danger">Edit</button></td>
            </tr>
           `;
    
           index++;
    
        }
    }


    function display(row) {

        localStorage.setItem("data","<p>Vrinda Bhatia is love</p>");
        window.location.href = "text.html"
          
    }

function add(){
    var dummy = document.getElementsByTagName("table")
    var table = document.querySelector('table')
    var l1=document.getElementById("l1");
    var text =document.getElementById("area").value;
    l1.innerHTML= dummy+table;
    // l1.appendChild(text);
}
function edit(row){
console.log(row.parentNode.parentNode.querySelector("td"))
}

 
      function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById('myimg').setAttribute('src',e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    document.getElementById('imgSel').onchange = function () { //set up a common class
        readURL(this);
    };


    
setInterval(
  function () {
    var j1=document.getElementById("j1");
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    j1.style.backgroundColor = "#"+randomColor;
  },2000);

      
  var j2=document.getElementById("j2");
  j2.style.backgroundColor="#000080";


  var h1=document.getElementById("h1");
  h1.style.boxShadow="2px 2px 2px blue";

        

  

 
       

    
    
    
 
   
     
 