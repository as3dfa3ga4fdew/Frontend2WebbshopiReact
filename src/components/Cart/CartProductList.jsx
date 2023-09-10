import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "..//..//styles/CartProductList.css";
import CartProductItem from "./CartProductItem";

const CartProductList = () =>{
    
    let {cartUpdate, cart} = useContext(CartContext);

    let mappedProducts = cart.map(product => {
        return <CartProductItem product={product}/>
    });

    return(
        <div className="cart-product-list-container">
            {cart.length === 0 ? <p>No products yet...</p>:mappedProducts}
        </div>
    );
}

export default CartProductList;