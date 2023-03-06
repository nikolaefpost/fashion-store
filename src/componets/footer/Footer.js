import React from 'react';
import {NavLink} from "react-router-dom";
import {useUser} from "../../context/user";
import style from "./footer.module.scss"



const Footer = ({total, linkName, linkUrl, onModal}) => {
    const { user } = useUser();

    return (
        <div className={style.container}>
            <span>Total: {total}</span>
            {!!linkUrl && <NavLink
                to={linkUrl}
            >
                {linkName}
            </NavLink>}
            {!!onModal&& <button onClick={onModal} className={user?.firstName ? undefined : style.inactive}>
                {linkName}
            </button>}
        </div>
    );
};

export default Footer;