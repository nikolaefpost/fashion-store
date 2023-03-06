import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from "../componets/nav/nav";

import style from "../style/_home.module.scss"





const Layout = () => {

    return (
            <div className={style.outlet}>
                <Nav/>
                <div className={style.content}>
                    <Outlet/>
                </div>
            </div>
    );
};

export default Layout;