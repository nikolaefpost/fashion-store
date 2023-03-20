import React from 'react';
import {useWindowSize} from "../../hooks/useWindowSize";

import styles from "./catalog.module.scss";

const ProductList = ({products}) => {
    return (
        <div className={styles.body}>
            {products.map(item => (
                <div
                    key={item.id}
                    className={styles.product}
                >
                    <img src={item.image} alt={item.title}/>
                    <div className={styles.card_text}>
                        <span className={styles.card_title}>{item.title}</span>
                        <span className={styles.card_price}>{item.price} грн</span>
                        <span className={styles.card_size}>XXS XS S M L</span>
                        <div className={styles.card_color}>
                            <div className={styles.white}/>
                            <div className={styles.grey}/>
                            <div className={styles.beige}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;