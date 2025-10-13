let token
window.onload = () => {
        document.querySelector("#loginBtn").addEventListener("click", function(e) {
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        login(username, password);
    })
}

async function login(username, password) {
    const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });
    if (response.ok) {
        const data = await response.json();
        token = data.token;
        localStorage.setItem("auth", data.auth);
        localStorage.setItem("uname", data.username);
        localStorage.setItem("token", data.token);
        document.querySelector("body").style.display = "block";
        window.location.replace("/index.html")
    }
    else {
        const error = await response.json();
        document.querySelector("#error").innerHTML = error.message;
    }
}