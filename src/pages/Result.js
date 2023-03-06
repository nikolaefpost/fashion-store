import React from 'react';
import Nav from "../componets/nav/nav";
import Footer from "../componets/footer/Footer";
import {useOrder} from "../context/orderData";
import {useLanguage} from "../context/setting";
import {useUser} from "../context/user";

const Result = () => {
    const {total, order} = useOrder();
    const {text} = useLanguage();
    const {user} = useUser();
    return (
        <div>
            <h3>{text.check_the_entered}!</h3>
            <p>Ващ заказ готов к отправке. Количество поциций - {order.length}, сума заказа - {total}</p>
            <ul>
                <li>First Name: {user.firstName}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
            </ul>
            <Footer total={total} />
        </div>
    );
};

export default Result;