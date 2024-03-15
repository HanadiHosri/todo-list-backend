function login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if(username.value == "AdminSEF123" && password.value == "SeF@ctORy$$456") {
        window.location.href = "../main.html"
    } else {
        alert("Invalid username or password. Please try again.")
    }
}




const signUp = async () => {
    try {
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);

        const response = await fetch("http://localhost/todo_backend/signup.php", {
            method: "POST",
            body: formData,
            mode: 'no-cors'
        });

        console.log(response);

        const responseData = await response.text();
        console.log("response data:", responseData);
        window.location.href = "main.html"
    } catch (error) {
        console.error("error:", error);
        alert("Error occurred while sending request");
    }
}

document.getElementById("signup-btn").addEventListener("click", signUp);