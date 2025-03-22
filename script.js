// ثبت‌نام کاربر
function signUp(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // بررسی تکراری نبودن ایمیل
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        showError("⚠️ این ایمیل قبلاً ثبت شده است!");
        return false;
    }

    // ذخیره در localStorage
    users.push({ email, username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ ثبت‌نام با موفقیت انجام شد!");
    toggleForms();
    return false;
}

// ورود کاربر
function login(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // بررسی نام کاربری و پسورد
    const storedUser = users.find(user => user.username === username && user.password === password);

    if (storedUser) {
        alert('✅ ورود موفقیت‌آمیز بود!');
        window.location.href = 'home.html';  // هدایت به صفحه اصلی
    } else {
        showError("⚠️ نام کاربری یا پسورد اشتباه است!");
    }
}

// نمایش پیام‌های خطا
function showError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = `<p>${message}</p>`;
    errorMessage.style.display = "block";

    setTimeout(() => {
        errorMessage.style.display = "none";
    }, 3000);
}

// جابه‌جایی بین فرم‌ها
function toggleForms() {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    if (signupForm.style.display === "none") {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    }
}

// تابع نمایش/عدم نمایش پسورد
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
}
