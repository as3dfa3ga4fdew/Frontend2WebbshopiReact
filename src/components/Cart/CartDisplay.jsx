import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { RemoveCartFromLocalStorage } from "../../services/SetData";
import "..//..//styles/CartDisplay.css";
import CartProductList from "./CartProductList";

const CartDisplay = () =>{
    
    let {cartUpdate, cart} = useContext(CartContext);
    const navigate = useNavigate();

    let sum = 0;
    cart.forEach(product => {
        sum = sum + parseInt(product.productPrice);
    });

    const emptyButton = () =>{
        RemoveCartFromLocalStorage();
        cartUpdate([]);
    }

    const checkoutButton = () =>{
        navigate("/Order");
    }

    return(
        <div className="cart-display-container">
            <CartProductList/>
            { cart.length === 0 ? <></>:<div className="cart-display-sum-container"><b>Due: {sum}$</b></div>}
            <div className="cart-display-button-container">
                
                {cart.length === 0 ? <></>:<><button onClick={() => emptyButton()}>Empty cart</button><button onClick={() => checkoutButton()}>Checkout</button></>}
                
                
            </div>
        </div>
    );

}

export default CartDisplay;