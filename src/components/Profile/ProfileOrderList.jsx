import "..//..//styles/ProfileOrderList.css";
import ProfileOrderItem from "./ProfileOrderItem";

const ProfileOrderList = (props) =>{
    let orders = props.orders;


    let mappedOrders = orders.map(order => {
        return <ProfileOrderItem order={order}/>
    });

    return(
        <div className="orders-info-container">
            {mappedOrders}
        </div> 
    );
}

export default ProfileOrderList;