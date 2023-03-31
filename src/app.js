import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Catalog, Order, Layout, Error404, Home, Product, PersonalArea} from "./pages";




export const router = createBrowserRouter([
    {
        path: "/fashion-store",
        element: <Layout  />,
        children: [
            {
                path: "/fashion-store",
                element: <Home  />,
            },
            {
                path: "/fashion-store/card",
                element: <Catalog  />,
            },
            {
                path: "/fashion-store/card/:cardId",
                element: <Product />,
            },
            {
                path: "/fashion-store/order",
                element: <Order/>,
            },
            {
                path: "/fashion-store/personal",
                element: <PersonalArea/>,
            },
            {
                path: "*",
                element: <Error404/>,
            },
        ],
    },
]);