import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LRPSwitchContext } from "../../contexts/LRPSwitchContext";
import { RemoveSessionKeyFromLocalStorage } from "../../services/SetData";

import "..//..//styles/ProfileDisplay.css";
import ProfileOrderList from "./ProfileOrderList";

const ProfileDisplay = (props) =>{
    const {lrpSwitchUpdate, lrpSwitch} = useContext(LRPSwitchContext);
    
    let profile = props.profile
    const navigation = useNavigate();


    const logoutButton = () =>{
        //Switch lrp
        RemoveSessionKeyFromLocalStorage();
        lrpSwitchUpdate(true);
        navigation("/");
    }

    return(
        <div className="profile-display-container">
            <div className="customer-info-container">
                
                <div>
                    <b>Customer</b>
                    <b>Name</b>
                    <p>{profile.customer.firstname} {profile.customer.lastname}</p>
                    <b>Email</b>
                    <p>{profile.customer.email}</p>
                    <button onClick={() => logoutButton()}>Logout</button>
                </div>

                <div>
                    <b>Address</b>
                    <p></p>
                    <b>Street</b>
                    <p>{profile.customer.street}</p>
                    <b>Zip</b>
                    <p>{profile.customer.zip}</p>
                    <b>City</b>
                    <p>{profile.customer.city}</p>
                    <b>Country</b>
                    <p>{profile.customer.country}</p>
                </div>
                
            </div>

            <div className="profile-display-item">
                <b>Orders</b>
            </div>
           
            { profile.orders.length === 0 ? <div className="profile-display-item"><p>No orders yet !</p></div>:<ProfileOrderList orders={profile.orders}/>}

        </div>
    );
}

export default ProfileDisplay;