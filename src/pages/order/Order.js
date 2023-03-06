import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Footer from "../../componets/footer/Footer";
import {useOrder} from "../../context/orderData";
import {useLanguage} from "../../context/setting";
import BootstrapModal from "../../componets/modal/BootstrapModal";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {useUser} from "../../context/user";


import styles from "./order.module.scss"


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

    const {user, handleSetUser} = useUser();

    const {total} = useOrder();
    const {text} = useLanguage();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (user.firstName)
        setShow(true)
    };

    const {
        register,
        formState: {errors},
        handleSubmit,
        setValue
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    useEffect(() => {
        if (!user?.firstName) return;
        setValue("firstName", user.firstName)
        setValue("email", user.email)
        setValue("phone", user.phone)
    }, [user]);

    const onSubmit = data => handleSetUser(data);
    return (
        <div className={styles.order_form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input_block}>
                    {!!errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
                    <input type="text" placeholder="firstName" {...register("firstName")} />
                </div>
                <div className={styles.input_block}>
                    {!!errors.email && <span className={styles.error}>{errors.email.message}</span>}
                    <input type="text" placeholder="email" {...register("email")} />
                </div>
                <div className={styles.input_block}>
                    {!!errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                    <input type="text" placeholder="phone" {...register("phone")} />
                </div>




                <button className={styles.submit_button} type="submit">Save data</button>
            </form>
            <Footer total={total} linkName={text.order} onModal={handleShow}/>
            <BootstrapModal handleClose={handleClose} show={show}/>
        </div>
    );
};

export default Order;