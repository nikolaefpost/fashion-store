import React, {useState} from 'react';
import {UserIcon} from "../../assets/icon";

import styles from "./nav.module.scss"
import Modal from "../modal/Modal";

const UserIdentification = ({isHome}) => {

    const [modal, setModal] = useState(false)

    const closeModal = (e) => {
        e.stopPropagation();
        setModal(false)
    }
    const openModal = () => setModal(true)

    return (
        <div className={styles.user_block} onClick={openModal}>
            <UserIcon color={isHome? "#FFFFFF":"#E0BEA2"} />
            {modal && <Modal fn={closeModal}>
                Modal
            </Modal>}
        </div>
    );
};

export default UserIdentification;