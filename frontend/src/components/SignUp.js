import React from "react";
import "../components/form.css";
import background from "../images/image.jpg";
import user from "../images/user.png";
import email from "../images/email.png";
import { useNavigate } from "react-router-dom";
import {submit} from "./submit.js";

export default function SignUp(){
    
    const navigate = useNavigate();

    const[signUpData, setSignUpData] = React.useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setSignUpData(prevSignUpData => {
            return{
                ...prevSignUpData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        if(signUpData.password !== signUpData.confirmPassword){
            alert("Passwords should match!!");
        }else{
            submit(signUpData, "signup");
        }
    }

    const logIn = () =>{
        navigate('/');
    }

    return(
        <div className="form-container">
            <form style={{backgroundImage: `url(${background})`}} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    id="userName"
                    onChange={handleChange}
                    name="userName"
                    value={signUpData.userName}
                    style={
                        {
                            backgroundImage: `url(${user})`,
                            backgroundSize: '15px',
                            backgroundPosition: '10px 4px',
                            backgroundRepeat: 'no-repeat',                            
                        }
                    }
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="emailId"
                    onChange={handleChange}
                    name="email"
                    value={signUpData.email}
                    style={
                        {
                            backgroundImage: `url(${email})`,
                            backgroundSize: '15px',
                            backgroundPosition: '10px 4px',
                            backgroundRepeat: 'no-repeat',                            
                        }
                    }
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="pass"
                    onChange={handleChange}
                    name="password"
                    value={signUpData.password}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    id="confirmPass"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={signUpData.confirmPassword}
                />
                <button>Sign Up</button>
                <p>Already have an account?</p>
                <button onClick={logIn}>Log In</button>
            </form>
        </div>
    )
}