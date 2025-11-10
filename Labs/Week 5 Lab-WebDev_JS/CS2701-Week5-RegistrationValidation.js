// -----------------------------
// Week 5 - Registration Validation Script
// -----------------------------

// Data to send
var formData = {
    username: "",
    email: "",
    password: "",
    buyer: false,
    seller: false
};

// Data to check but not send
var formValid = false;
var repPassword = "";
var tosCheckBox = false;

// -----------------------------
// Read form data from inputs
// -----------------------------
function readForm() {
    formData.username = document.getElementById("name").value.trim();
    formData.email = document.getElementById("email").value.trim();
    formData.password = document.getElementById("password").value.trim();
    repPassword = document.getElementById("repPassword").value.trim();

    // Read checkboxes
    formData.buyer = document.getElementById("buyer").checked;
    formData.seller = document.getElementById("seller").checked;

    tosCheckBox = document.getElementById("tos").checked;
}

// -----------------------------
// Validate form input
// -----------------------------
function validateForm() {
    formValid = true;

    // Email regex
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // 1. Check required fields
    if (
        formData.username === "" ||
        formData.email === "" ||
        formData.password === "" ||
        repPassword === ""
    ) {
        alert("⚠️ Please fill in all required fields (Name, Email, Password, and Repeat Password).");
        formValid = false;
        return;
    }

    // 2. Check valid email format
    if (!formData.email.match(mailformat)) {
        alert("⚠️ Please enter a valid email address.");
        formValid = false;
        return;
    }

    // 3. Password strength
    if (formData.password.length < 8) {
        alert("⚠️ Password must be at least 8 characters long.");
        formValid = false;
        return;
    }

    if (!/[A-Z]/.test(formData.password) || !/[0-9]/.test(formData.password)) {
        alert("⚠️ Password must include at least one uppercase letter and one number.");
        formValid = false;
        return;
    }

    // 4. Password match
    if (formData.password !== repPassword) {
        alert("⚠️ Passwords do not match.");
        formValid = false;
        return;
    }

    // 5. Buyer/Seller checkbox
    if (!formData.buyer && !formData.seller) {
        alert("⚠️ Please select at least one role (Buyer or Seller).");
        formValid = false;
        return;
    }

    // 6. Terms of Service checkbox
    if (!tosCheckBox) {
        alert("⚠️ You must agree to the Terms of Service before registering.");
        formValid = false;
        return;
    }

    // If all checks pass
    formValid = true;
    alert("✅ Registration successful!");
}

// -----------------------------
// Display success text on page
// -----------------------------
function createNewParagraph(content) {
    var text = document.createTextNode(content);
    var paragraph = document.createElement("p");
    paragraph.appendChild(text);
    paragraph.style = "white-space: pre;";
    paragraph.id = "hiddenParagraph";

    var element = document.getElementById("hiddenSection");
    var existingParagraph = document.getElementById("hiddenParagraph");
    element.replaceChild(paragraph, existingParagraph);
}

// -----------------------------
// Handle form submission
// -----------------------------
function submitForm() {
    readForm();
    validateForm();

    if (formValid) {
        var formText = formData.username + " registered as:\n";
        formText += formData.buyer ? "Buyer\n" : "";
        formText += formData.seller ? "Seller" : "";

        console.log(formText);
        createNewParagraph(formText);
    }
}
