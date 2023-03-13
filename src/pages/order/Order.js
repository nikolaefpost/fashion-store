import React, { useState } from 'react';
import Footer from "../../componets/footer/Footer";
import {useLanguage} from "../../context/setting";
import BootstrapModal from "../../componets/modal/BootstrapModal";
import styles from "./order.module.scss"
// import currentUser from "../../store/userData";
import Form from "../../componets/form/Form";
import {useRoot} from "../../context/rootStore";


const Order = () => {
    // const { user, handleSetUser } = useUser();
    // const { user } = currentUser;
    const { userStore } = useRoot();
    const { text } = useLanguage();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (userStore.user.firstName) setShow(true)
    };

    return (
        <div className={styles.order_form}>
            <Form/>
            <Footer linkName={text.order} onModal={handleShow}/>
            <BootstrapModal handleClose={handleClose} show={show}/>
        </div>
    );
};

export default Order;