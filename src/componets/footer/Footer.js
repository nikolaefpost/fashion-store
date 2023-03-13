import React from 'react';
import { NavLink } from "react-router-dom";
// import {useUser} from "../../context/user";
import style from "./footer.module.scss"
import { observer } from "mobx-react-lite";
// import orderData from "../../store/orderData";
import { useRoot } from "../../context/rootStore";


const Footer = ({linkName, linkUrl, onModal}) => {
    // const { user } = useUser();
    // const {user} = currentUser;
    // const {total} = orderData
    const { orderStore, userStore } = useRoot();
    return (
        <div className={style.container}>
            <span>Total: {orderStore.total}</span>
            {!!linkUrl && <NavLink
                to={linkUrl}
            >
                {linkName}
            </NavLink>}
            {!!onModal && <button onClick={onModal} className={userStore.user?.firstName ? undefined : style.inactive}>
                {linkName}
            </button>}
        </div>
    );
};

export default observer(Footer);