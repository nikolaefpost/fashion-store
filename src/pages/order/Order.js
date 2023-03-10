import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import Footer from "../../componets/footer/Footer";
import {useLanguage} from "../../context/setting";
import BootstrapModal from "../../componets/modal/BootstrapModal";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {useUser} from "../../context/user";
import InputForm from "../../componets/inputForm/InputForm";

import styles from "./order.module.scss"


const form = ["firstName", "email", "phone"]

const schema = yup
    .object({
        firstName: yup
            .string()
            .required("first name is empty")
            .min(2, "Invalid name. Length minimum 2 characters."),
        email: yup
            .string()
            .email("Invalid email address")
            .required("Email address is empty"),
        phone: yup
            .string()
            .required("Phone field is empty")
            .min(8, "Invalid phone. Length minimum 8 characters."),
    })
    .required(
        "Fields are not filled or entered incorrectly. Correct or re-enter please.",
    );

const Order = () => {

    const { user, handleSetUser } = useUser();
    const { text } = useLanguage();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (user.firstName) setShow(true)
    };

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
        values: user,
        shouldFocusError: true,

    });

    const onSubmit = handleSubmit(data => handleSetUser(data));
    return (
        <div className={styles.order_form}>
            <form onSubmit={onSubmit}>
                {form.map(item => <InputForm key={item}  register={register} errors={errors} field={item}/>)}
                <button className={styles.submit_button} type="submit">Save data</button>
            </form>
            <Footer linkName={text.order} onModal={handleShow}/>
            <BootstrapModal handleClose={handleClose} show={show}/>
        </div>
    );
};

export default Order;