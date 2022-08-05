

function clickCounter() {
    if (localStorage.a) {
        localStorage.a = Number(localStorage.a)+1;
    } else {
        localStorage.a = 1;
    }
    document.getElementById("demo").innerHTML = localStorage.a;
}