import React from 'react';
import Footer from "../componets/footer/Footer";
// import {useOrder} from "../context/orderData";
import {useLanguage} from "../context/setting";
import {useUser} from "../context/user";
import {observer} from "mobx-react-lite";
import orderData from "../store/orderData";
import currentUser from "../store/userData";



const Result = () => {
    // const {total, order} = useOrder();
    const {total, order} = orderData;
    const {text} = useLanguage();
    // const {user} = useUser();
    const {user} = currentUser;

    return (
        <div>
            <h3>{text.check_the_entered}!</h3>
            <p>Ващ заказ готов к отправке. Количество поциций - {order.length}, сума заказа - {total}</p>
            <ul>
                <li>First Name: {user.firstName}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
            </ul>
            <Footer />
        </div>
    );
};

export default observer(Result);