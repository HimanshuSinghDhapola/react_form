import React from "react";
import "../components/form.css";
import background from "../images/image.jpg";
import email from "../images/email.png";
import { useNavigate } from "react-router-dom";
import {submit} from "./submit";

export default function LogIn(){
    const navigate = useNavigate();

    const[logInData, setLogInData] = React.useState({
        email: "",
        password: ""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setLogInData(prevLogInData => {
            return{
                ...prevLogInData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        submit(logInData, "");
    }

    const signUp = () => {
        navigate('/signup');
    }

    return(
        <div className="form-container">
            <form style={{backgroundImage: `url(${background})`}} onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    id="emailId"
                    onChange={handleChange}
                    name="email"
                    value={logInData.email}
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
                    value={logInData.password}
                />
                <button>Log In</button>
                <p>Forget your Password?</p>
                <p>Don't have an account?</p>
                <button onClick={signUp}>Sign Up</button>
            </form>
        </div>
    )
}