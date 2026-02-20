import React, {useRef} from "react";

export default function Login(){
    const email=useRef();
    const password=useRef();

    const validateForm = () => {
        let formValid = false;
        if (email.current.validity.valueMissing
            || password.current.validity.valueMissing){
                alert("Please fill in all text fields.");
        }else if (email.current.validity.typeMismatch){
            alert("Invalid e-mail address. Please enter your e-mail again.");
        }else{
            formValid = true;
        }
        return formValid;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const dataLogin = {
            username: email.current.value,
            password: password.current.value
        };

        console.log(dataLogin);

    }

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