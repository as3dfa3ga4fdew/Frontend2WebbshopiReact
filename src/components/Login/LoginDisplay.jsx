import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LRPSwitchContext } from "../../contexts/LRPSwitchContext";
import { LoginByCredentials } from "../../services/GetData";
import { SetSessionKeyToLocalStorage } from "../../services/SetData";
import "..//..//styles/LoginDisplay.css";

const LoginDiplay = () =>{
    const {lrpSwitchUpdate, lrpSwitch} = useContext(LRPSwitchContext);
    const navigation = useNavigate();

    let emailInput = useRef();
    let passwordInput = useRef();

    const [errorMessage, setErrorMessage] = useState(<p></p>);

    const loginButton = () =>{
        let email = emailInput.current.value;
        let password = passwordInput.current.value;

        if(email === "")
        {
            setErrorMessage(<p>Email field cannot be empty.</p>);
            return;
        }

        if(password === "")
        {
            setErrorMessage(<p>Password field cannot be empty.</p>);
            return;
        }

        LoginByCredentials(email, password).then(data => {
            //Check
            if(data === undefined)
            {
                setErrorMessage(<p>Ooops something went wrong, please try again later.</p>);
                return;
            }

            if(data.hasOwnProperty("error"))
            {
                setErrorMessage(<p>{data.error.message}</p>);
                return;
            }

            //Set session key
            SetSessionKeyToLocalStorage(data.session_key);

            //Set context switch
            lrpSwitchUpdate(false);

            //Redirect to home page
            navigation("/");
        });
    }


    return(
        <div className="login-display-container">
            <div className="login-email-container">
                <p>Email</p>
                <input type="text" ref={emailInput}/>
            </div>
            <div className="login-password-container">
                <p>Password</p>
                <input type="password" ref={passwordInput}/>
            </div>
            {errorMessage}
            <div className="login-button-container">
                <button onClick={() => loginButton()}>Login</button>
            </div>
        </div>
    );
}

export default LoginDiplay;