import { useNavigate } from "react-router-dom";
import "..//..//styles/ProductItem.css";
const ProductItem = (props) =>{

    const navigate = useNavigate();
    

    return(
        <div className="product-item-container" onClick={() => navigate("/Product/" + props.product.productId, {state: props.product})}>
            <img src={props.product.productImg} alt="img" />
            <h3>{props.product.productName}</h3>
            <p>{props.product.productPrice}$</p>
        </div>
    );
}

export default ProductItem;