import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Catalog, Order, Result, Layout, Error404, Home, Product} from "./pages";




export const router = createBrowserRouter([
    {
        // path: "/",
        element: <Layout  />,
        children: [
            {
                path: "",
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
                path: "result",
                element: <Result/>,
            },
            {
                path: "*",
                element: <Error404/>,
            },
        ],
    },
]);