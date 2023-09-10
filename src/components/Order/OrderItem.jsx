import "..//..//styles/OrderItem.css";

const OrderItem = (props) =>{
    let product = props.product;


    return(
        <div className="order-item-container">
            <p>{product.productName}</p>
            <b>{product.productPrice}$</b>
        </div>
    );
}

export default OrderItem;