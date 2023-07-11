function login() {
    let emailAddress = document.getElementById('floatingInput').value;
    let password = document.getElementById('floatingPassword').value;
    console.log("Email Address: " + emailAddress);
    console.log("Password: " + password);

}

function clicked() {
    window.alert("Clicked!")
    console.log("Card Clicked!")
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}