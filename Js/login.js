function register() {
    window.location = "register.html";
}

function returnLogin() {
    window.location = "login.html";
}

function login() {
    let userName = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    var listAccount = JSON.parse(localStorage.getItem("account")) ?? [];
    let isValue = false;
    listAccount.forEach(output);

    function output(index) {
        if (index.userName === userName && index.passWord === pass)
            return isValue = true;
    }

    if (isValue) {
        document.getElementById("note").innerHTML = "Correct";
    } else
        document.getElementById("note").innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
}

function saveData() {
    // tim hieu JSON.prase
    var listAccount = JSON.parse(localStorage.getItem("account")) ?? [];
    let fullname = document.getElementById("fullname").value;
    let ps = document.getElementById("mk").value;
    let mail = document.getElementById("mail").value;
    let gender = " ";
    //kiem tra gioi tinh
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").innerHTML = 1;
    } else if (document.getElementById("female").checked) {
        gender = document.getElementById("female").innerHTML = 2;
    }
    //luu tk vao vung nho
    if (fullname && ps) {
        listAccount.push({
            userName: fullname,
            passWord: ps
        });
        localStorage.setItem("account", JSON.stringify(listAccount));
        document.getElementById("result").innerHTML = "Đăng ký thành công"
    }

}
