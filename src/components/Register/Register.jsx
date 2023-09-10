import RegisterDisplay from "./RegisterDisplay";
import "..//..//styles/Register.css";
import SearchBar from "../Search/SearchBar";
const Register = () =>{
    return(
        <div className="register-container">
            <SearchBar/>
            <RegisterDisplay/>
        </div>
    );
}

export default Register;