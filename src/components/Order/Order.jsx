import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "..//..//styles/Order.css";
import OrderDisplay from "./OrderDisplay";

const Order = () =>{
    let {cartUpdate, cart} = useContext(CartContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(cart.length === 0)
        {
            navigate("/");
        }
    });


    return(
        <div className="order-container">
            <OrderDisplay/>
        </div>
    );
}

export default Order;