import React from 'react';
import {useLanguage} from "../context/setting";
import {observer} from "mobx-react-lite";
import {useRoot} from "../context/rootStore";
import rootStore from "../store/rootStore";



const Result = () => {

    const {text} = useLanguage();
    const {orderStore, userStore} = rootStore;

    return (
        <div>
            <h3>{text.check_the_entered}!</h3>
            <p>Ващ заказ готов к отправке. Количество поциций - {orderStore.total.count}, сума заказа - {orderStore.total.sum}</p>
            <ul>
                <li>First Name: {userStore.user.firstName}</li>
                <li>Email: {userStore.user.email}</li>
                <li>Phone: {userStore.user.phone}</li>
            </ul>
        </div>
    );
};

export default observer(Result);