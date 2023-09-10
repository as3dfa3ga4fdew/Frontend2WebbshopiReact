import "..//..//styles/ProfileOrderItem.css";

const ProfileOrderItem = (props) =>{
    let order = props.order;

    let sum = 0;
    let products = "";
    order.products.forEach(product => {
        sum = sum + parseInt(product.productPrice);
    });

    let mappedProducts = order.products.map(product => {
        return <p>{product.productName}</p>
    });

    return(
        <div className="profile-order-item">
            <b>{order.orderId} - {sum}$</b>

            {mappedProducts}
           
        </div>
    );
}

export default ProfileOrderItem;