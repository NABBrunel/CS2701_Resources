//Let's define some variables to represent the form data
//At the beginning, the form is empty, and therefore, not valid

//Data to send
var formData = {
    username: "",
    email: "",
    password: "",
    buyer: false,
    seller: false
}

//This data will be read but not be sent as part of the form submission
var formValid = false;
var repPassword = "";
var tosCheckBox = false;


//Function to read the form
function readForm() {
    formData.username = document.getElementById("name").value.trim();
    // Corrected to match your HTML: id="email"
    formData.email = document.getElementById("email").value.trim();
    formData.password = document.getElementById("password").value.trim();
    // Corrected to match your HTML: id="repPassword"
    repPassword = document.getElementById("repPassword").value.trim();

    //Read the buyer and seller checkboxes 
    formData.buyer = document.getElementById("buyer").checked;
    formData.seller = document.getElementById("seller").checked;

    // Corrected to match your HTML: id="tos"
    tosCheckBox = document.getElementById("tos").checked;

}

//Function to validate the form
function validateForm() {
    formValid = false; // Start by assuming the form is invalid
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Validate that all required fields are filled
    if (formData.username === "") {
        alert("Name field cannot be empty. Please enter your name.");
        return; // Stop validation
    }

    // Verify that the email address is in a valid format
    if (formData.email === "") {
        alert("Email field cannot be empty. Please enter your email.");
        return;
    } else if (!formData.email.match(mailformat)) {
        // This is the check from your lab sheet (Figure 2/7)
        alert("Invalid e-mail address. Please enter your e-mail again.");
        return;
    }

    // Perform password strength and matching checks
    if (formData.password === "") {
        alert("Password field cannot be empty. Please enter a password.");
        return;
    }
    if (formData.password !== repPassword) {
        alert("Passwords do not match. Please re-type your password.");
        return;
    }

    // Validate that the required checkboxes are selected
    if (!tosCheckBox) {
        alert("You must agree to the Terms of Use and Privacy Policy.");
        return;
    }

    // If all checks passed, set formValid to true
    formValid = true;
}

//Function to write the Registration success on the page
function createNewParagraph(content) {
    var text = document.createTextNode(content);
    var paragraph = document.createElement("p");
    paragraph.appendChild(text);
    paragraph.style = "white-space: pre;"
    paragraph.id = "hiddenParagraph";

    var element = document.getElementById("hiddenSection");
    var existingParagraph = document.getElementById("hiddenParagraph")
    element.replaceChild(paragraph, existingParagraph);
}

//Function  to submit the form, this should be called by the Register button
//on click
function submitForm() {
    readForm();
    // call the validation function
    validateForm(); // This will set formValid to true or false

    if (formValid) {
        var formText = formData.username + " registered as:\n";
        formText += formData.buyer ? "buyer\n" : "";
        formText += formData.seller ? "seller" : "";

        console.log(formText);
        createNewParagraph(formText);

        // Optional: Alert for success, as shown in my previous example
        alert("Registration successful!");
    }
}

