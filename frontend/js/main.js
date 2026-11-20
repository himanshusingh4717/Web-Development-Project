
/* ==========================================
   DEFENCE ACQUISITION INTELLIGENCE
   Main JavaScript File
========================================== */

document.addEventListener("DOMContentLoaded", function () {


    // ==========================================
    // 1. REGISTRATION FORM FUNCTIONALITY
    // ==========================================

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        const fullNameField = document.getElementById("fullName");
        const emailField = document.getElementById("email");
        const passwordField = document.getElementById("password");
        const confirmPasswordField = document.getElementById("confirmPassword");

        const termsCheckbox = registerForm.querySelector(
            'input[type="checkbox"]'
        );

        // Create inline error message below Confirm Password
        const confirmPasswordError = document.createElement("small");

        confirmPasswordError.className = "form-error";

        confirmPasswordField.insertAdjacentElement(
            "afterend",
            confirmPasswordError
        );

        // Clear error while typing
        confirmPasswordField.addEventListener("input", function () {
            confirmPasswordError.textContent = "";
        });

        // Handle registration form submission
        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const fullName = fullNameField.value.trim();
            const email = emailField.value.trim();
            const password = passwordField.value;
            const confirmPassword = confirmPasswordField.value;

            // Check empty fields
            if (!fullName || !email || !password || !confirmPassword) {
                alert("Please fill in all the fields.");
                return;
            }

            // Check password length
            if (password.length < 8) {
                alert("Password must contain at least 8 characters.");
                passwordField.focus();
                return;
            }

            // Check whether passwords match
            if (password !== confirmPassword) {

                confirmPasswordError.textContent =
                    "Passwords do not match. Please try again.";

                confirmPasswordField.focus();
                return;
            }

            // Clear error if passwords match
            confirmPasswordError.textContent = "";

            // Check Terms and Conditions
            if (termsCheckbox && !termsCheckbox.checked) {
                alert("Please accept the Terms and Conditions.");
                return;
            }

            // Registration validation successful
            alert(
                "Registration form validated successfully! Backend connection is coming next."
            );

            registerForm.reset();
            confirmPasswordError.textContent = "";

        });

    }


    // ==========================================
    // 2. LOGIN FORM FUNCTIONALITY
    // ==========================================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        const emailField = document.getElementById("email");
        const passwordField = document.getElementById("password");

        // Create inline error message
        const loginError = document.createElement("small");

        loginError.className = "form-error";

        // Place error message below the Sign In button
        const loginButton = loginForm.querySelector(
            'button[type="submit"], input[type="submit"]'
        );

        if (loginButton) {
            loginButton.insertAdjacentElement("afterend", loginError);
        } else {
            loginForm.appendChild(loginError);
        }

        // Handle login form submission
        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = emailField.value.trim();
            const password = passwordField.value;

            // Check empty fields
            if (!email || !password) {

                loginError.textContent =
                    "Please enter your email and password.";

                return;
            }

            // Clear error
            loginError.textContent = "";

            // Redirect to Dashboard
            window.location.href = "dashboard.html";

        });

        // Clear error when user starts typing
        emailField.addEventListener("input", function () {
            loginError.textContent = "";
        });

        passwordField.addEventListener("input", function () {
            loginError.textContent = "";
        });

    }

});
