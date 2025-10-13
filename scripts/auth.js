class Auth {
    constructor() {
        document.querySelector("body").style.display = "none";
        const auth = localStorage.getItem("auth");
        this.validateAuth(auth);
    }
    validateAuth(auth) {
        if (auth) {
            document.querySelector("body").style.display = "block";
        } else {
            window.location.replace("/login.html")
        }
    }
    logOut() {
        localStorage.removeItem("auth");
        localStorage.removeItem("uname");
        localStorage.removeItem("token");
        window.location.replace("/login.html")
    }
}