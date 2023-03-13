import React from 'react';
import MinMaxRef from "../min_max/minMaxRef";
import {TiDelete} from "react-icons/ti";
// import orderData from "../../store/orderData";
import {observer} from "mobx-react-lite";

import styles from "./productList.module.scss";
import {useRoot} from "../../context/rootStore";


const ProductListMobx = () => {
    const { orderStore } = useRoot();
    // const {order, changeCnt, deleteProduct, isLoading} = orderData;
    // const {order, total, changeCnt, deleteProduct} = useOrder();
    return orderStore.isLoading ? <div>Loading....</div> : (
        <table className={styles.table}>
            <tbody>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Pic</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total</th>
                <th>Delete</th>
            </tr>
            {orderStore.order.map((elem, i) => (
                <tr key={elem.id}>
                    <td>{i + 1}</td>
                    <td>
                        <img src={elem.image} alt="products"/>
                    </td>
                    <td className={styles.title}>{elem.title}</td>
                    <td>{elem.price}</td>
                    <td>
                        <MinMaxRef min={0} max={elem.id} cnt={elem.cmt} changeCnt={cmt => orderStore.changeCnt(elem.id, cmt)}/>
                    </td>
                    <td>{(elem.cmt * elem.price).toFixed(2)}</td>
                    <td onClick={() => orderStore.deleteProduct(elem.id)}>
                        <TiDelete/>
                    </td>
                </tr>)
            )}
            </tbody>
        </table>
    );
};

export default observer(ProductListMobx);