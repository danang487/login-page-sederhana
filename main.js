let togglePassword = document.getElementById("togglePassword");
let password = document.getElementById("password");
let btnLogin = document.getElementById("btnLogin");
let rememberMe = document.getElementById("rememberMe");
let username = document.getElementById("username");

togglePassword.addEventListener("click", () => {
    let type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type",type);

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
})

window.addEventListener("load", () => {
    let savedUser = localStorage.getItem("savedUsername");
    let savedPassword = localStorage.getItem("savedPassword");

    if (savedUser && savedPassword) {
        username.value = savedUser;
        password.value = savedPassword;
        rememberMe.checked = true;
    }
})

btnLogin.addEventListener("click", () => {
    if (username.value === "" || password.value === "") {
        alert("Username dan Password Wajib Di Isi !");
        return;
    }

    if (rememberMe.checked) {
        localStorage.setItem("savedUsername", username.value);
        localStorage.setItem("savedPassword", password.value);
        alert("Login Berhasil ✅ (Password Di Simpan Otomatis)");
    } else {
        localStorage.removeItem("savedUsername");
        localStorage.removeItem("savedPassword");
        alert("Login Berhasil ✅");
    }

    username.value = "";
    password.value = "";
    rememberMe.checked = false;
})