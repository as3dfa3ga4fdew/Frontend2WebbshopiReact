import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LRPSwitchContext } from "../../contexts/LRPSwitchContext";
import { CreateMd5 } from "../../services/Helper";
import { SetRegister, SetSessionKeyToLocalStorage } from "../../services/SetData";
import "..//..//styles/RegisterDisplay.css";

const RegisterDisplay = () =>{

    const {lrpSwitchUpdate, lrpSwitch} = useContext(LRPSwitchContext);
    const navigation = useNavigate();
    const [errorMessage, setErrorMessage] = useState(<p></p>);

    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const streetInput = useRef();
    const cityInput = useRef();
    const zipInput = useRef();
    const countryInput = useRef();

    const registerButton = () =>{
        //Check inputs

        let firstname = firstNameInput.current.value;
        let lastname = lastNameInput.current.value;
        let email = emailInput.current.value;
        let password = passwordInput.current.value;
        let street = streetInput.current.value;
        let city = cityInput.current.value;
        let zip = zipInput.current.value;
        let country = countryInput.current.value;

        if(firstname === "" || lastname === "" || email === "" || password === "" ||street === "" || city === "" || zip === "" || country === "")
        {
            setErrorMessage(<p>Please fill in all fields.</p>);
            return;
        }
        password = CreateMd5(password);

        let post = {"action":"register", "firstname":firstname, "lastname":lastname, "email":email, "password":password, "address":{"street":street,"city":city,"zip":zip,"country":country}};

        SetRegister(post).then(data => {
            //Check data

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
        <div className="register-display-container">
            <div>
                <p>Firstname</p>
                <input type="text" ref={firstNameInput}/>
            </div>
            <div>
                <p>Lastname</p>
                <input type="text" ref={lastNameInput}/>
            </div>
            <div>
                <p>Email</p>
                <input type="email" ref={emailInput}/>
            </div>
            <div>
                <p>Password</p>
                <input type="password" ref={passwordInput}/>
            </div>
            <div>
                <p>Street</p>
                <input type="text" ref={streetInput}/>
            </div>
            <div>
                <p>City</p>
                <input type="text" ref={cityInput}/>
            </div>
            <div>
                <p>Zip</p>
                <input type="text" ref={zipInput}/>
            </div>
            <div>
                <p>Country</p>
                <input type="text" ref={countryInput}/>
            </div>
            {errorMessage}
            <div>
                <button onClick={() => registerButton()}>Register</button>
            </div>
        </div>
    );
}

export default RegisterDisplay;