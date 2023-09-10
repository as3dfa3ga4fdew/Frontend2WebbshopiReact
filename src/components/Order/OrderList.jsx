import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import OrderItem from "./OrderItem";
import "..//..//styles/OrderList.css";
const OrderList = () =>{
    
    let {cartUpdate, cart} = useContext(CartContext);

    let mappedOrder = cart.map(product => {
        return <OrderItem product={product}/>
    });
    return(
        <div className="order-list-container">
            {mappedOrder}
        </div>
    );
}

export default OrderList;