import { createContext, useState } from "react";
import { GetCartItemsFromLocalStorage } from "../services/GetData";

const CartContext = createContext();

const CartProvider = (props) =>{
    const cartUpdate = (val) =>{
        setCart(val);
    }

    //Init from localstorage
    
    let products = GetCartItemsFromLocalStorage();
    if(products === null)
    {
        products = [];
    }
    else
    {
        products = JSON.parse(products).products;
    }


    const [cart, setCart] = useState(products);

    return(
        <CartContext.Provider value={{cart, cartUpdate}}>
            {props.children}
        </CartContext.Provider>
    );
}

export {CartProvider, CartContext};