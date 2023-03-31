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
                path: "/card",
                element: <Catalog  />,
            },
            {
                path: "/card/:cardId",
                element: <Product />,
            },
            {
                path: "order",
                element: <Order/>,
            },
            {
                path: "personal",
                element: <PersonalArea/>,
            },
            {
                path: "*",
                element: <Error404/>,
            },
        ],
    },
]);