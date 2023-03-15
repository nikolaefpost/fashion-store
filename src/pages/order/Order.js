import React, { useState } from 'react';
import {useLanguage} from "../../context/setting";
import BootstrapModal from "../../componets/modal/BootstrapModal";
import styles from "./order.module.scss"
import Form from "../../componets/form/Form";
// import {useRoot} from "../../context/rootStore";
import {observer} from "mobx-react-lite";
import rootStore from "../../store/rootStore";


const Order = () => {
    const { userStore } = rootStore;
    const { text } = useLanguage();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (userStore.user.firstName) setShow(true)
    };

    return (
        <div className={styles.order_form}>
            <Form/>
            <BootstrapModal handleClose={handleClose} show={show}/>
        </div>
    );
};

export default observer(Order);