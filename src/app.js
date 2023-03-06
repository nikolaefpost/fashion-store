import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Card, Order, Result, Layout} from "./pages";



export const router = createBrowserRouter([
    {
        // path: "/",
        element: <Layout  />,
        children: [
            {
                path: "/",
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
        ],
    },
]);