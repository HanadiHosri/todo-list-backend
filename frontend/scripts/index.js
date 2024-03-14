function login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if(username.value == "AdminSEF123" && password.value == "SeF@ctORy$$456") {
        window.location.href = "../main.html"
    } else {
        alert("Invalid username or password. Please try again.")
    }
}