function login(){
    let userName = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (userName == "1") {
        if (pass == "2") {
            document.getElementById("note").innerHTML = "Correct";
        } else
            document.getElementById("note").innerHTML = "Tên đăng nhập hoặc mật khẩu sai";

    }
}

function register(){
    window.location = "register.html";
}
