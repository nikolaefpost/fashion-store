import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./nav.module.scss"
import {useLanguage} from "../../context/setting";
import {observer} from "mobx-react-lite";
import {SlArrowDown} from "react-icons/sl"

import { useHref } from "react-router-dom"
import {MenuIcon, FavoriteIcon, SearchIcon, OrderIcon, UserIcon} from "../../assets/icon";

const Nav = () => {
    const {text, lang, onChangeLang } = useLanguage();
    let isHome = useHref() === "/"

    const mainStyle = {
        color: "#FFFFFF"
    }



    return (
        <nav className={styles.nav} style={isHome? mainStyle: {}}>

            <div className={styles.left_block}>
                <MenuIcon color={isHome? "#FFFFFF":"#E0BEA2"}/>
                <NavLink
                    to="card"
                    style={isHome? mainStyle: {}}
                    className={({ isActive}) =>
                         isActive ? styles.active : ""
                    }
                >
                    {text.card}
                </NavLink>
                <NavLink
                    to="order"
                    style={isHome? mainStyle: {}}
                    className={({ isActive}) =>
                        isActive ? styles.active : ""
                    }
                >
                    {text.order}
                </NavLink>
                <NavLink
                    to="result"
                    style={isHome? mainStyle: {}}
                    className={({ isActive}) =>
                        isActive ? styles.active : ""
                    }
                >
                    {text.result}
                </NavLink>
            </div>
            <NavLink
                to=""
                className={styles.title}
                style={isHome? mainStyle: {}}
            >fashion</NavLink>

            <div className={styles.right_block}>
                <div className={styles.language}>
                    <button
                        onClick={onChangeLang}
                        style={isHome? mainStyle: {}}
                    >{lang}</button>
                    <SlArrowDown/>
                </div>
                <SearchIcon color={isHome? "#FFFFFF":"#252525"} />
                <UserIcon color={isHome? "#FFFFFF":"#E0BEA2"} />
                <FavoriteIcon color={isHome? "#FFFFFF":"#E0BEA2"}/>
                <OrderIcon color={isHome? "#FFFFFF":"#E0BEA2"} />

            </div>

            {/*{!!userStore.user && !!userStore.user.firstName && <div>*/}
            {/*    <span>Hi {userStore.user?.firstName}!</span>*/}
            {/*    <button onClick={userStore.deleteUser}>exit</button>*/}
            {/*</div>}*/}
        </nav>
    );
};

export default observer(Nav);