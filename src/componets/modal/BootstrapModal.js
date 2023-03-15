import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {useLanguage} from "../../context/setting";
// import {useRoot} from "../../context/rootStore";
import rootStore from "../../store/rootStore";
import {observer} from "mobx-react-lite";

const BootstrapModal = ({show, handleClose, }) => {
    const [conf, setConf] = useState(false)
    const navigate = useNavigate();
    const { userStore } = rootStore;
    const {text} = useLanguage();

    const handleExited = () => {
        if (conf) navigate("/result")
    }
    const handleConf = () => {
        setConf(true)
        handleClose();
    }
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            onExited={handleExited}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{text.check_the_entered}!</h3>
                <ul>
                    <li>First Name: {userStore.user?.firstName}</li>
                    <li>Email: {userStore.user?.email}</li>
                    <li>Phone: {userStore.user?.phone}</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleConf}>Understood</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default observer(BootstrapModal);