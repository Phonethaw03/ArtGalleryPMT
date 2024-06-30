document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const bioInput = document.getElementById("bio");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Validate username
        if (usernameInput.value.trim() === "") {
            showError(usernameInput, "Username is required.");
            isValid = false;
        } else {
            showSuccess(usernameInput);
        }

        // Validate email
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required.");
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Please enter a valid email.");
            isValid = false;
        } else {
            showSuccess(emailInput);
        }

        // Validate bio
        if (bioInput.value.trim() === "") {
            showError(bioInput, "Bio is required.");
            isValid = false;
        } else {
            showSuccess(bioInput);
        }

        if (isValid) {
            // If all fields are valid, you can proceed with form submission or AJAX request
            console.log("Form is valid. Submitting...");
            // You can uncomment the following line to actually submit the form if needed
            // form.submit();
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.remove("success");
        formGroup.classList.add("error");
        const small = formGroup.querySelector("small");
        if (small) {
            small.innerText = message;
        } else {
            const errorMsg = document.createElement("small");
            errorMsg.classList.add("text-danger");
            errorMsg.innerText = message;
            formGroup.appendChild(errorMsg);
        }
    }

    function showSuccess(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove("error");
        formGroup.classList.add("success");
        const small = formGroup.querySelector("small");
        if (small) {
            small.innerText = "";
        }
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
