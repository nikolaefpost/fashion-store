import React from 'react';
import Footer from "../../componets/footer/Footer";
import {useLanguage} from "../../context/setting";
import ProductListMobx from "../../componets/productList/productListMobx";
import currentUser from "../../store/userData";


const Card = () => {
    const {text} = useLanguage();
    const {user} = currentUser;

    return (
        <div >
            <h2>Product list</h2>
            <ProductListMobx/>
            <Footer  linkName={text.checkout} linkUrl={user?.firstName? "/result" : "/order"}/>
        </div>
    );
};

export default Card;