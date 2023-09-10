import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { AddCartItemTolocalStorage } from "../../services/SetData";
import "..//..//styles/ProductDisplay.css";
import SearchBar from "../Search/SearchBar";

const ProductDisplay = (props) =>{

    let {cartUpdate, cart} = useContext(CartContext);

    const addButton = () =>{
        cartUpdate([...cart, props.product]);
        AddCartItemTolocalStorage(props.product);
    }

    return(
        <>
            <div className="product-display-container">
            <SearchBar/>
                <div className="product-diplay-top-container">
                    <div>
                        <img src={props.product.productImg} alt="" />
                    </div>
                    <div>
                        <h2>{props.product.productName}</h2>
                        <p>{props.product.productDescription}</p>
                    </div>
                </div>
                <div className="product-diplay-bot-container">
                    <b>{props.product.productPrice}$</b>
                    <button onClick={() => addButton()}>Add to casket</button>
                </div>
            </div>
        </>
        
    );
}

export default ProductDisplay;