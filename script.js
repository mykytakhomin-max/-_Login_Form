let password = document.getElementById("password");
let showPassword = document.getElementById("showPassword");
let form = document.getElementById("loginForm");
let message = document.getElementById("message");

// тут показать чи не показать пароль, якщо кнопку нажать
showPassword.addEventListener("change", function () {
    if (showPassword.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});


form.addEventListener("submit", function (event) {
    event.preventDefault();
    message.textContent = "Форму заповнено правильно!";
});
