import { useContext, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import { LRPSwitchContext } from "../../contexts/LRPSwitchContext";
import { GetSessionKeyFromLocalStorage, LoginBySessionKey } from "../../services/GetData";
import "../../styles/Nav.css";
import Cart from "../Cart/Cart";

const Nav = () =>{

    const {lrpSwitchUpdate, lrpSwitch} = useContext(LRPSwitchContext);

    useLayoutEffect(()=>{
        let sessionKey = GetSessionKeyFromLocalStorage();
        if(sessionKey === "" || sessionKey === null || sessionKey === undefined)
            lrpSwitchUpdate(true);

        (async () => {
            let data = await LoginBySessionKey(sessionKey);
            if(data === undefined)
            {
                lrpSwitchUpdate(true);
                return;
            }

            if(data.hasOwnProperty("error"))
            {
                lrpSwitchUpdate(true);
                return;
            }

            lrpSwitchUpdate(false);
            
        })();
        
    },[lrpSwitchUpdate])


    return(
        <>
            <div className="top-container">
                <div className="top-item-container">

                    <nav>
                        <Cart/>
                        <NavLink to="/">Top Style</NavLink>

                        <NavLink to="/Search">Search</NavLink>
                        
                        {lrpSwitch === null ? <></>: lrpSwitch ?<><NavLink to="/Login">Login</NavLink><NavLink to="/Register">Register</NavLink></>:<NavLink to="/Profile">Profile</NavLink> }

                    </nav>

                    
                    
                </div>
            </div>

            <hr />
            
        </>
        
    );
}

export default Nav;

