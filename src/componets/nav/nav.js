import React from 'react';
import {NavLink} from "react-router-dom";

import style from "./nav.module.scss"
import {useLanguage} from "../../context/setting";
// import {useUser} from "../../context/user";
// import currentUser from "../../store/userData";
import {observer} from "mobx-react-lite";
import {useRoot} from "../../context/rootStore";

const Nav = () => {
    const {text, lang, onChangeLang } = useLanguage();
    // const {user, deleteUser} = useUser();
    // const { user, deleteUser } = currentUser;
    const { userStore } = useRoot();

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

            {!!userStore.user && !!userStore.user.firstName && <div>
                <span>Hi {userStore.user?.firstName}!</span>
                <button onClick={userStore.deleteUser}>exit</button>
            </div>}
            <button onClick={onChangeLang}>{lang}</button>
        </nav>
    );
};

export default observer(Nav);