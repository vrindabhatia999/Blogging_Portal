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



 // DOM selectors
 const stars = document.getElementById('stars');
 const starsCtx = stars.getContext('2d');
 const slider = document.querySelector(".slider input");
 const output = document.querySelector("#speed");
 
 // global variables
 let screen, starsElements, starsParams = { speed: 10, number: 300, extinction: 4 };
 
 // run stars
 setupStars();
 updateStars();
 
 // handle slider
 output.innerHTML = slider.value;
 slider.oninput = function() {
     output.innerHTML = this.value;
     starsParams.speed = this.value;
 };
 
 // update stars on resize to keep them centered
 window.onresize = function() {
     setupStars();
 };
 
 // star constructor
 function Star() {
     this.x = Math.random() * stars.width;
     this.y = Math.random() * stars.height;
     this.z = Math.random() * stars.width;
 
     this.move = function() {
         this.z -= starsParams.speed;
         if (this.z <= 0) {
             this.z = stars.width;
         }
     };
 
     this.show = function() {
         let x, y, rad, opacity;
         x = (this.x - screen.c[0]) * (stars.width / this.z);
         x = x + screen.c[0];
         y = (this.y - screen.c[1]) * (stars.width / this.z);
         y = y + screen.c[1];
         rad = stars.width / this.z;
         opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;
 
         starsCtx.beginPath();
         starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
         starsCtx.arc(x, y, rad, 0, Math.PI * 2);
         starsCtx.fill();
     }
 }
 
 // setup <canvas>, create all the starts
 function setupStars() {
     screen = {
         w: window.innerWidth,
         h: window.innerHeight,
         c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
     };
     window.cancelAnimationFrame(updateStars);
     stars.width = screen.w;
     stars.height = screen.h;
     starsElements = [];
     for (let i = 0; i < starsParams.number; i++) {
         starsElements[i] = new Star();
     }
 }
 
 // redraw the frame
 function updateStars() {
     starsCtx.fillStyle = "black";
     starsCtx.fillRect(0, 0, stars.width, stars.height);
     starsElements.forEach(function (s) {
         s.show();
         s.move();
     });
     window.requestAnimationFrame(updateStars);
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
 
  

 
       

    
    
    
 
   
     
 