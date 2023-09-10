import { GetSessionKey, LoginByCredentials } from "../../services/GetData";
import { SetSessionKey } from "../../services/SetData";
import "../../styles/Login.css";
import SearchBar from "../Search/SearchBar";
import LoginDiplay from "./LoginDisplay";
const Login = () => {

    return (
        <div className="login-container">
            <SearchBar/>
            <LoginDiplay/>
        </div>
    );

}

export default Login;