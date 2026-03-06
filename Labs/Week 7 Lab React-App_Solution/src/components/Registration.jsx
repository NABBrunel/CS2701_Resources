export default function Registration() {

  let formData = {
    username: "",
    email: "",
    password: "",
    buyer: false,
    seller: false,
  };

  let formValid = false;
  let repPassword = "";
  let tosCheckBox = false;

  function readForm() {
    formData.username = document.getElementById("name").value.trim();
    formData.email = document.getElementById("email").value.trim();
    formData.password = document.getElementById("password").value.trim();
    repPassword = document.getElementById("repPassword").value.trim();

    formData.buyer = document.getElementById("buyer").checked;
    formData.seller = document.getElementById("seller").checked;

    tosCheckBox = document.getElementById("tos").checked;
  }

  function validateForm() {
    formValid = false;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      formData.username.length == 0 ||
      formData.email.length == 0 ||
      formData.password.length == 0 ||
      repPassword.length == 0
    ) {
      alert("Please fill in all text fields.");
    } else if (!formData.email.match(mailformat)) {
      alert("Invalid e-mail address. Please enter your e-mail again.");
    } else if (formData.password.length < 8) {
      alert("Password is too short. Please select another password");
    } else if (formData.password !== repPassword) {
      alert("Passwords do not match. Please retry");
    } else if (!formData.buyer && !formData.seller) {
      alert("Please check at least one checkbox to be a seller or a buyer.");
    } else if (!tosCheckBox) {
      alert("Please agree to the Terms and Conditions, and Privacy Policy.");
    } else {
      formValid = true;
    }
  }

  function createNewParagraph(content) {
    let text = document.createTextNode(content);
    let paragraph = document.createElement("p");
    paragraph.appendChild(text);
    paragraph.style = "white-space: pre;";
    paragraph.id = "hiddenParagraph";

    let element = document.getElementById("hiddenSection");
    let existingParagraph = document.getElementById("hiddenParagraph");
    element.replaceChild(paragraph, existingParagraph);
  }

  function submitForm(event) {
    event.preventDefault();
    readForm();
    validateForm();

    if (formValid) {
      let formText = formData.username + " registered as:\n";
      formText += formData.buyer ? "buyer\n" : "";
      formText += formData.seller ? "seller" : "";

      console.log(formText);
      createNewParagraph(formText);
      event.target.reset();
    }
  }

  return (
    <>
      <form className="registration" noValidate onSubmit={submitForm}>
        <label className="labelText" htmlFor="name">Name:</label>
        <input type="text" className="inputText" id="name" name="name" required autoComplete="off" />
        <br /><br />

        <label className="labelText" htmlFor="email">Email:</label>
        <input type="email" className="inputText" id="email" name="email" required autoComplete="off" />
        <br /><br />

        <label className="labelText" htmlFor="password">Password:</label>
        <input type="password" className="inputText" id="password" name="password" required minLength="8" />
        <br /><br />

        <label className="labelText" htmlFor="repPassword">Re-type password:</label>
        <input type="password" className="inputText" id="repPassword" name="repPassword" required />
        <br /><br />

        <input type="checkbox" id="buyer" name="buyer" value="buyer" />
        <label htmlFor="buyer">I want to buy produce directly from allotment owners.</label>
        <br />

        <input type="checkbox" id="seller" name="seller" value="seller" />
        <label htmlFor="seller">I want to sell produce from my allotment.</label>
        <br /><br />

        <input type="checkbox" id="tos" name="tos" value="tos" />
        <label htmlFor="tos">I agree to the Terms of Use and Privacy Policy.</label>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <section id="hiddenSection">
        <p id="hiddenParagraph"></p>
      </section>
    </>
  );
}
