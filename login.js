function login(){
    var uname=document.getElementById('username').value;
    var pass=document.getElementById('password').value;
    if(uname=="riya"&&pass=="riya@123")
        location.assign("file:///C:/Users/NIKHIL/Desktop/javascript/login_page/logged.html");
    else
        alert("login failed");
}


