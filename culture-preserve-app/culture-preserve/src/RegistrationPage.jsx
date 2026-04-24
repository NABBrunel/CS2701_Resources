import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";

export default function RegistrationPage() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const userType = useRef();
    const navigate = useNavigate();

    const validateForm = () => {
        let formValid = false;
        if (name.current.validity.valueMissing ||
            email.current.validity.valueMissing ||
            password.current.validity.valueMissing ||
            userType.current.validity.valueMissing) {
            alert("Please fill in all text fields.");
        } else if (email.current.validity.typeMismatch) {
            alert("Invalid e-mail address. Please enter your e-mail again.");
        } else {
            formValid = true;
        }
        return formValid;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        const dataRegister = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            userType: userType.current.value
        };

        try {
            const response = await fetch("http://localhost:8080/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataRegister)
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Registration successful:", data);
                alert("Registration successful! Please login.");
                navigate("/login");
            } else {
                const errorMessage = await response.text();
                alert("Registration failed: " + errorMessage);
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Error connecting to server");
        }
    };

    return (
        <form className="form" noValidate onSubmit={handleSubmit}>
            <label className="labelText">Name:</label>
            <input type="text" ref={name} name="name" required/><br/><br/>

            <label className="labelText">Email:</label>
            <input type="email" ref={email} name="email" required/><br/><br/>

            <label className="labelText">Password:</label>
            <input type="password" ref={password} name="password" required/><br/><br/>

            <label className="labelText">User Type:</label>
            <select ref={userType} name="userType" required>
                <option value="">Select User Type</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select><br/><br/>
            
            <input type="submit" value="Register"/>
        </form>
    )
}