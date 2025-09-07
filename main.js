let togglePassword = document.getElementById("togglePassword");
let password = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    let type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type",type);

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
})