import React from 'react';
import {useLanguage} from "../../context/setting";
import ProductListMobx from "../../componets/productList/productListMobx";
// import {useRoot} from "../../context/rootStore";
import rootStore from "../../store/rootStore";


const Card = () => {
    const {text} = useLanguage();
    // const {user} = currentUser;
    const { userStore } = rootStore;
    console.log(userStore)

    return (
        <div >
            <h2>Product list</h2>
            <ProductListMobx/>
        </div>
    );
};

export default Card;