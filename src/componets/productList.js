import React, {useEffect, useState} from 'react';
import style from "../style/_home.module.scss"
import MinMaxRef from "./min_max/minMaxRef";
import Modal from "./modal/Modal";
import {Button} from "react-bootstrap";
import BootstrapModal from "./modal/BootstrapModal";


const ProductList = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    
    const handleModal = () => setOpen(prev=>!prev)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeCnt = (id, cmt) => {
        setData(prev => prev.map(item => item.id === id ? {...item, cmt}: item))
        // let newData = [...data];
        // newData[id].cmt = cnt;
        // setData(newData);
    }

    const deleteProduct = (id) => {
        setData(prev => prev.filter(item => item.id !== id))
    }

    const total = (() => {
        return  data.reduce((acc, cur) => acc + cur.cmt*cur.price, 0).toFixed(2)
    })();

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json.map(item=>({...item, cmt: 1}))))
    },[]);
    // console.log(data)
    return (
        <div>
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
                {data.map((elem, i)=> (
                    <tr key={elem.id}>
                        <td>{i+1}</td>
                        <td className={style.title}>{elem.title}</td>
                        <td>
                            <img src={elem.image}/>
                        </td>
                        <td>{elem.price}</td>
                        <td>
                            <MinMaxRef min={0} max={elem.id} cnt={elem.cmt} changeCnt={cmt => changeCnt(elem.id, cmt)}/>
                        </td>
                        <td>{(elem.cmt*elem.price).toFixed(2)}</td>
                        <td onClick={()=>deleteProduct(elem.id)}>-</td>

                    </tr>)
                )}
                </tbody>
            </table>
            <div onClick={handleModal}>Total: {total}</div>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>
            {open && <Modal fn={handleModal}>
               <div>Content</div>
            </Modal>}
            <BootstrapModal handleClose={handleClose} show={show}/>

        </div>


    );
};



export default ProductList;