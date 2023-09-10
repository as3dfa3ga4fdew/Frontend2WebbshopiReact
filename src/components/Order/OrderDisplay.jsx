import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { GetSessionKeyFromLocalStorage } from "../../services/GetData";
import { RemoveCartFromLocalStorage, SetOrder } from "../../services/SetData";
import "..//..//styles/OrderDisplay.css";
import OrderList from "./OrderList";

const OrderDisplay = () =>{
    let {cartUpdate, cart} = useContext(CartContext);
    
    const navigate = useNavigate();

    let sum = 0;
    cart.forEach(product => {
        sum = sum + parseInt(product.productPrice);
    });

    const orderButton = () =>{
        //Call api with order and session key
        let sessionKey = GetSessionKeyFromLocalStorage();
        let productIds = cart.map(product => {
            return product.productId;
        });

        console.log(productIds);

        SetOrder(sessionKey, productIds).then(data => {
            console.log(data);
        });

        //Clear cart
        RemoveCartFromLocalStorage();
        cartUpdate([]);
        //navigate to profile

        navigate("/Profile");
    }

    const loginButton = () =>{
        navigate("/Login");
    }

    return(
        <div className="order-display-container">

            <OrderList/>
            <div className="order-display-button-container">
                <b>Due: {sum}$</b>
                {GetSessionKeyFromLocalStorage() === null ? <button onClick={() => loginButton()}>Login</button>:<button onClick={()=>orderButton()}>Order</button>}
            </div>
        </div>
    );
}

export default OrderDisplay;