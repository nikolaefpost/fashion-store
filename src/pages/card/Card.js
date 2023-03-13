import React from 'react';
import Footer from "../../componets/footer/Footer";
import {useLanguage} from "../../context/setting";
import ProductListMobx from "../../componets/productList/productListMobx";
// import currentUser from "../../store/userData";
import {useRoot} from "../../context/rootStore";


const Card = () => {
    const {text} = useLanguage();
    // const {user} = currentUser;
    const { userStore } = useRoot();

    return (
        <div >
            <h2>Product list</h2>
            <ProductListMobx/>
            <Footer  linkName={text.checkout} linkUrl={userStore.user?.firstName? "/result" : "/order"}/>
        </div>
    );
};

export default Card;