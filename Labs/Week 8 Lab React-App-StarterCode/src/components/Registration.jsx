import { useState } from "react";

const empty = { name: "", email: "", password: "", repPassword: "", buyer: false, seller: false, tos: false };

// Rules: +1 each for length >= 8, upper AND lower case, a digit, a symbol. 0-1 Weak, 2-3 Medium, 4 Strong.
function passwordStrength(pw) {
    if (!pw) return "";
    const score = [pw.length >= 8, /[a-z]/.test(pw) && /[A-Z]/.test(pw), /\d/.test(pw), /[^A-Za-z0-9]/.test(pw)]
        .filter(Boolean).length;
    return score <= 1 ? "Weak" : score <= 3 ? "Medium" : "Strong";
}

export default function Registration() {
    // Controlled form: React state is the single source of truth for every input.
    const [form, setForm] = useState(empty);

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    // Returns an error message, or "" if the form is valid.
    const validate = () => {
        if (!form.name || !form.email || !form.password || !form.repPassword) return "Please fill in all text fields.";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Invalid e-mail address. Please enter your e-mail again.";
        if (form.password.length < 8) return "Password is too short. Please select another password";
        if (form.password !== form.repPassword) return "Passwords do not match. Please retry";
        if (!form.buyer && !form.seller) return "Please check at least one checkbox to select being a seller or a buyer in the system.";
        if (!form.tos) return "Please agree to the Terms and Conditions, and Privacy Policy.";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validate();
        if (error) return alert(error);
        // shortcut: no backend yet, so just confirm; POST the form here once an API exists.
        alert(`Registered successfully: ${form.name} — ${form.email}`);
        setForm(empty);
    };

    return (
        <form className="registration" onSubmit={handleSubmit} noValidate>
            <label className="labelText">Name: </label>
            <input type="text" className="inputText" name="name" value={form.name} onChange={handleChange} autoComplete="off" /><br/><br/>

            <label className="labelText">Email:</label>
            <input type="email" className="inputText" name="email" value={form.email} onChange={handleChange} autoComplete="off" /><br/><br/>

            <label className="labelText">Password:</label>
            <input type="password" className="inputText" name="password" value={form.password} onChange={handleChange} />
            {/* Derived from state on every render, so it updates as the user types. */}
            <span aria-live="polite"> {form.password && `Strength: ${passwordStrength(form.password)}`}</span><br/><br/>

            <label className="labelText">Re-type password:</label>
            <input type="password" className="inputText" name="repPassword" value={form.repPassword} onChange={handleChange} /><br/><br/>

            <input type="checkbox" name="buyer" checked={form.buyer} onChange={handleChange} />
            <label>I want to buy produce directly from allotment owners.</label><br/>

            <input type="checkbox" name="seller" checked={form.seller} onChange={handleChange} />
            <label>I want to sell produce from my allotment.</label><br/><br/>

            <input type="checkbox" name="tos" checked={form.tos} onChange={handleChange} />
            <label>I agree to the Terms of Use and Privacy Policy.</label>
            <br/><br/>

            <button type="submit">Submit</button>
        </form>
    );
}
