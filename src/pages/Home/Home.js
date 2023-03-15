import React from 'react';
import {new1, new2, new3} from "../../assets/img"

const news = [new1, new2, new3]

import styles from "./home.module.scss";
import rootStore from "../../store/rootStore";
import {observer} from "mobx-react-lite";
import HomeSlider from "./HomeSlider";
import SubscriptForm from "./SubscriptForm";



const Home = () => {
    const { orderStore } = rootStore;
    return (
        <div className={styles.content}>
            <div className={styles.new_block}>
                {news.map(item=>(
                    <div key={item} className={styles.img_block}>
                        <div className={styles.gradient}/>
                        <img src={item} alt="news"/>
                    </div>
                ))}
            </div>
            <div className={styles.category}>
                <h2>Категории</h2>
                <HomeSlider data={orderStore.category} />
            </div>
            <div className={styles.subscription}>
                <h2>Узнайте  первым о новинках</h2>
                <SubscriptForm/>
            </div>

        </div>
    );
};

export default observer(Home);