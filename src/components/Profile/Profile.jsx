import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetProfile, GetSessionKeyFromLocalStorage } from "../../services/GetData";
import Load from "../Helper/Load";
import "..//..//styles/Profile.css";
import ProfileDisplay from "./ProfileDisplay";

const Profile = () =>{
    const navigate = useNavigate();
    let [profile, setProfile] = useState();

    useLayoutEffect(() =>{
        (async () =>{

            //Check
            const sessionKey = GetSessionKeyFromLocalStorage();

            //Switch from profile to login/register again
            if(sessionKey ===  null)
                navigate("/");


            let data = await GetProfile(sessionKey);

            setProfile(data);
        })();
        
    },[navigate]);


    return(
        <div className="profile-container">
            {profile === undefined ? <Load/>:<ProfileDisplay profile={profile}/>}
        </div>
    );
}




export default Profile;