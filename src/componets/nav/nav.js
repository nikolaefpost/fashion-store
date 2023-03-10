import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import style from "./nav.module.scss"
import {useLanguage} from "../../context/setting";
import {useUser} from "../../context/user";
import currentUser from "../../store/userData";
import {observer} from "mobx-react-lite";

const Nav = () => {
    const {text, lang, onChangeLang } = useLanguage();
    // const {user, deleteUser} = useUser();
    const { user, deleteUser } = currentUser;

    let activeStyle = {
        textDecoration: "underline"
    };

    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <NavLink
                        to=""
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        {text.card}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/order"
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        {text.order}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/result"
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        {text.result}
                    </NavLink>
                </li>
            </ul>

            {!!user && !!user.firstName && <div>
                <span>Hi {user?.firstName}!</span>
                <button onClick={deleteUser}>exit</button>
            </div>}
            <button onClick={onChangeLang}>{lang}</button>
        </nav>
    );
};

export default observer(Nav);