import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Card, Order, Result, Layout, Error404, Home} from "./pages";




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
                element: <Card  />,
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