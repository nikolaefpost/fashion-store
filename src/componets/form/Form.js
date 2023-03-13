import React from 'react';
import InputForm from "../inputForm/InputForm";
// import currentUser from "../../store/userData";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "../../pages/order/order.module.scss";
import {observer} from "mobx-react-lite";
import {useRoot} from "../../context/rootStore";

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

const Form = () => {

    // const { user, handleSetUser } = useUser();
    // const { user, handleSetUser } = currentUser;
    const { userStore } = useRoot();

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
        values: userStore.user,
        shouldFocusError: true,

    });

    const onSubmit = handleSubmit(data => userStore.handleSetUser(data));
    return (
        <form onSubmit={onSubmit}>
            {form.map(item => <InputForm key={item}  register={register} errors={errors} field={item}/>)}
            <button className={styles.submit_button} type="submit">Save data</button>
        </form>
    );
};

export default observer(Form);