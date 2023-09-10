import { useState } from "react";
import "..//..//styles/Cart.css";
import CartDisplay from "./CartDisplay";


const Cart = () =>{
    let [show, setShow] = useState(false);

    const cartButton = () =>{
        if(show == true)
            setShow(false);
        else
            setShow(true);
    }

    return(
        <div className="cart-container">
            <button onClick={() => cartButton()}>Cart</button>

            {show ? <CartDisplay/>:<></>}
            
        </div>
    );
}

export default Cart;