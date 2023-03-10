import "./index.scss";


import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom"
import {router} from "./app";
import {LanguageProvider} from "./context/setting"
// import {OrderProvider} from "./context/orderData";
// import {UserProvider} from "./context/user";


createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        {/*<UserProvider>*/}
            {/*<OrderProvider>*/}
                <LanguageProvider>
                    <RouterProvider router={router}/>
                </LanguageProvider>
            {/*</OrderProvider>*/}
        {/*</UserProvider>*/}
    </React.StrictMode>
);

// import "./test/testCard"