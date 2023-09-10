import { createContext, useContext, useState } from "react";

const LRPSwitchContext = createContext();

const LRPSwitchProvider = (props) =>{
    const lrpSwitchUpdate = (val) =>{
        setLRPSwitch(val);
    }
    
    const [lrpSwitch, setLRPSwitch] = useState(null);

    return(
        <LRPSwitchContext.Provider value={{lrpSwitch, lrpSwitchUpdate}}>
            {props.children}
        </LRPSwitchContext.Provider>
    );
}

export {LRPSwitchProvider, LRPSwitchContext};