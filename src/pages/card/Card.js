import React from 'react';
import {TiDelete} from "react-icons/ti"
// import {useOrder} from "../../context/orderData";
import style from "./card.module.scss";
import MinMaxRef from "../../componets/min_max/minMaxRef";
import Footer from "../../componets/footer/Footer";
import {useLanguage} from "../../context/setting";
import {useUser} from "../../context/user";
import orderData from "../../store/orderData";
import {observer} from "mobx-react-lite";


const Card = () => {
    // const {order, total, changeCnt, deleteProduct} = useOrder();
    const {order, changeCnt, deleteProduct} = orderData;

    const {text} = useLanguage();
    const {user} = useUser();


    return (
        <div className={style.card_table}>
            <h2>Product list</h2>
            <table>
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
                {order.map((elem, i) => (
                    <tr key={elem.id}>
                        <td>{i + 1}</td>
                        <td>
                            <img src={elem.image} alt="products"/>
                        </td>
                        <td className={style.title}>{elem.title}</td>
                        <td>{elem.price}</td>
                        <td>
                            <MinMaxRef min={0} max={elem.id} cnt={elem.cmt} changeCnt={cmt => changeCnt(elem.id, cmt)}/>
                        </td>
                        <td>{(elem.cmt * elem.price).toFixed(2)}</td>
                        <td onClick={() => deleteProduct(elem.id)}>
                            <TiDelete/>
                        </td>
                    </tr>)
                )}
                </tbody>
            </table>
            <Footer  linkName={text.checkout} linkUrl={user?.firstName? "/result" : "/order"}/>
        </div>
    );
};

export default observer(Card);