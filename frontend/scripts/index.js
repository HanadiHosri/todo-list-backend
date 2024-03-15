const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const loginText = document.getElementById("login-text");
const signupText = document.getElementById("signup-text");
const emailLabel = document.getElementById("email-label");
const emailInput = document.getElementById("email");


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

        const responseData = await response.text();
        console.log("response data:", responseData);
        loginBtn.classList.remove("hidden");
        loginText.classList.remove("hidden");
        signupBtn.classList.add("hidden");
        signupText.classList.add("hidden");
        emailLabel.classList.add("hidden");
        emailInput.classList.add("hidden");
        
        document.getElementById("username").value="";
        document.getElementById("password").value="";

    } catch (error) {
        console.error("error:", error);
        alert("Error occurred while sending request");
    }
}

document.getElementById("signup-btn").addEventListener("click", signUp);

const logIn = async () => {
    try {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const response = await fetch("http://localhost/todo_backend/signin.php", {
            method: "POST",
            body: formData,
            mode: 'no-cors'
        });

        const responseData = await response.text();
        console.log("response data:", responseData);
        window.location.href = "main.html";

    } catch (error) {
        console.error("error:", error);
        alert("Error occured while sending request");
    }
}

document.getElementById("login-btn").addEventListener("click", logIn);