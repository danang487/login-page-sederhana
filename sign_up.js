let togglePassword = document.getElementById("togglePassword");
let password = document.getElementById("password");
let toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
let confirmPassword = document.getElementById("confirmPassword");
let status_icon_confirm = document.getElementById("status_icon_confirm");
let inputBoxConfirm = confirmPassword.parentElement;
let btnSignUp = document.getElementById("btnSignUp")


togglePassword.addEventListener("click", () => {
    let type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type",type);

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
})

toggleConfirmPassword.addEventListener("click", () => {
    let confirmType = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", confirmType);

    toggleConfirmPassword.classList.toggle("fa-eye");
    toggleConfirmPassword.classList.toggle("fa-eye-slash");
})


confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value === "") {
        inputBoxConfirm.classList.remove("error", "success");
        status_icon_confirm.style.display="none";
    } else if (confirmPassword.value === password.value) {
        inputBoxConfirm.classList.add("success");
        inputBoxConfirm.classList.remove("error");
        status_icon_confirm.className="fa-solid fa-check";
        status_icon_confirm.style.color="green";
        status_icon_confirm.style.display="block";
    } else {
        inputBoxConfirm.classList.add("error");
        inputBoxConfirm.classList.remove("success");
        status_icon_confirm.className="fa-solid fa-xmark";
        status_icon_confirm.style.color="#e74c3c";
        status_icon_confirm.style.display="block";
    }
})

btnSignUp.addEventListener("click", () => {
    let inputs = document.querySelectorAll("form input");
    let allFiled = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFiled = false;
        }
    });

    if (!allFiled) {
        alert("⚠️ Semua Kolom Wajib Di Isi");
        return;
    }

    alert("✅ Sign Up Berhasil");
    inputs.forEach(input => {
        input.value = "";
        inputBoxConfirm.classList.remove("error", "success");
        status_icon_confirm.style.display="none";
    })
})