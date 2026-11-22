import { useState } from "react";

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");
    const [buyer, setBuyer] = useState(false);
    const [seller, setSeller] = useState(false);
    const [tos, setTos] = useState(false);

    // Calculate password strength
    const getPasswordStrength = () => {
        if (password === "") {
            return "";
        }

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[^A-Za-z0-9]/.test(password);

        let score = 0;

        if (hasUppercase) score++;
        if (hasLowercase) score++;
        if (hasNumber) score++;
        if (hasSpecial) score++;

        if (password.length < 8) {
            return "Weak";
        }
        else if (password.length >= 12 && score === 4) {
            return "Strong";
        }
        else if (score >= 3) {
            return "Medium";
        }
        else {
            return "Weak";
        }
    };

    const validateForm = () => {
        let formValid = false;

        if (!name || !email || !password || !repPassword) {
            alert("Please fill in all text fields.");
        }
        else if (!email.includes("@")) {
            alert("Invalid e-mail address. Please enter your e-mail again.");
        }
        else if (password.length < 8) {
            alert("Password is too short. Please select another password");
        }
        else if (password !== repPassword) {
            alert("Passwords do not match. Please retry");
        }
        else if (!buyer && !seller) {
            alert("Please check at least one checkbox to select being a seller or a buyer in the system.");
        }
        else if (!tos) {
            alert("Please agree to the Terms and Conditions, and Privacy Policy.");
        }
        else {
            formValid = true;
        }

        return formValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            alert("Form submitted");
        }
    };

    return (
        <form className="registration" noValidate onSubmit={handleSubmit}>
            <label className="labelText">Name: </label>
            <input
                type="text"
                className="inputText"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                autoComplete="off"
            />
            <br /><br />

            <label className="labelText">Email:</label>
            <input
                type="email"
                className="inputText"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="off"
            />
            <br /><br />

            <label className="labelText">Password:</label>
            <input
                type="password"
                className="inputText"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength="8"
            />

            <p>Password strength: {getPasswordStrength() || "—"}</p>

            <br />

            <label className="labelText">Re-type password:</label>
            <input
                type="password"
                className="inputText"
                name="repPassword"
                value={repPassword}
                onChange={(event) => setRepPassword(event.target.value)}
                required
            />
            <br /><br />

            <input
                type="checkbox"
                name="buyer"
                value="buyer"
                checked={buyer}
                onChange={(event) => setBuyer(event.target.checked)}
            />
            <label>I want to buy produce directly from allotment owners.</label>
            <br />

            <input
                type="checkbox"
                name="seller"
                value="seller"
                checked={seller}
                onChange={(event) => setSeller(event.target.checked)}
            />
            <label>I want to sell produce from my allotment.</label>
            <br /><br />

            <input
                type="checkbox"
                name="tos"
                value="tos"
                checked={tos}
                onChange={(event) => setTos(event.target.checked)}
            />
            <label>I agree to the Terms of Use and Privacy Policy.</label>
            <br /><br />

            <button type="submit">Submit</button>
        </form>
    );
}