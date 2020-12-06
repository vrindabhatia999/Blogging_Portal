function validate(){
    var username=document.getElementById("uname").value;
    var pass=document.getElementById('pass').value;

    if(username==""||  pass==""    ){
        alert("username,pass should not be blank and should not exceed 10 char");
        return false;
    }
    else{
        return true;
    }


}
