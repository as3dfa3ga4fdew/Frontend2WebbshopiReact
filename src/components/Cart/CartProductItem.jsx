import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { GetCartItemsFromLocalStorage } from "../../services/GetData";
import { RemoveCartItemFromLocalStorage } from "../../services/SetData";
import "..//..//styles/CartProductItem.css";

const CartProductItem = (props) =>{
    
    let {cartUpdate, cart} = useContext(CartContext);
    let product = props.product;

    const removeButton = () =>{
        RemoveCartItemFromLocalStorage(product);


        let products = GetCartItemsFromLocalStorage();
        if(products === null)
        {
            products = [];
        }
        else
        {
            products = JSON.parse(products).products;
        }
        
        cartUpdate(products);
    }

    return(
        <div className="cart-product-item-container">
            <p>{product.productName}</p>
            <p>{product.productPrice}$</p>
            <button onClick={() => removeButton()}>Remove</button>

        </div>
    );
}

export default CartProductItem;