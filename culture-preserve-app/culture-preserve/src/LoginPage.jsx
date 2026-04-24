import React, {useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function Login(){
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const validateForm = () => {
        let formValid = false;
        if (email.current.validity.valueMissing || password.current.validity.valueMissing) {
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

        const dataLogin = {
            email: email.current.value,
            password: password.current.value
        };

        try {
            const response = await fetch("http://localhost:8080/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataLogin)
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);
                
                
                localStorage.setItem("user", JSON.stringify(data.user));
                
                navigate("/videos"); 
                
            } else {
                const errorMessage = await response.text();
                alert("Login failed: " + errorMessage);
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Error connecting to server");
        }
    };

    return (
        <form className="form" noValidate onSubmit={handleSubmit}>
            <label className="labelText">Email:</label>
            <input type="email" ref={email} name="email" required/><br/><br/>

            <label className="labelText">Password:</label>
            <input type="password" ref={password} name="password" required/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}