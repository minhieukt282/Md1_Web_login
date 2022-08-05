function login() {
    let userName = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (userName == "1") {
        if (pass == "2") {
            document.getElementById("note").innerHTML = "Correct";
        } else
            document.getElementById("note").innerHTML = "Tên đăng nhập hoặc mật khẩu sai";

    }
}

function register() {
    window.location = "register.html";
}

function saveData() {
    let fullname = document.getElementById("fullname").value;
    // let  a = document.getElementById("mk").value;
    let mail = document.getElementById("mail").value;
    let gender = " ";
    //kiem tra gioi tinh
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").innerHTML = 1;
    } else if (document.getElementById("female").checked) {
        gender = document.getElementById("female").innerHTML = 2;
    }
    //luu tk vao vung nho

}

    // if (fullname && mail) {
    //     let student = {
    //         user: fullname,
    //         pass: mail,
    //     };
    // }
    console.log(fullname, mail, gender);
}