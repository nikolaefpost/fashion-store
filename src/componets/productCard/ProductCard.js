import React, {useEffect, useState} from 'react';
import {AiOutlineRight, AiOutlineHeart} from "react-icons/ai";
import cn from "classnames";
import {product1, product2, product3, product4} from "../../assets/img";
import Description from "./Description";
import OtherImage from "../../pages/product/OtherImage";

import styles from "./productCard.module.scss"


const size = ["XXS", "XS", "S", "M", "L"]

const ProductCard = ({product, dataWhile, dataAdditional, dataLike, dataRecentlyWatched, handleTransition}) => {

    const productImg = [product?.image, product1, product2, product3, product4];
    const [openSelect, setOpenSelect] = useState(false);
    const [sizeProduct, setSizeProduct] = useState("Выберите размер")

    const [currentImg, setCurrentImg] = useState("");

    const styleX ={width: "370px", height: "501px"}
    const styleL ={width: "274px", height: "401px"}
    useEffect(()=>{
        setCurrentImg(product?.image)
    },[product])

    return (
        <div className={styles.content}>
            <div className={styles.product_card}>
                <div className={styles.img_block}>
                    <div className={styles.list_img}>
                        <div className={styles.shift_block}>
                            {productImg.map((src, i)=>(
                                <img key={i} src={src} alt="product" onClick={()=>setCurrentImg(src)}/>
                            ))}
                        </div>
                    </div>
                    <div className={styles.main_img}>
                        <img src={currentImg} alt="product"/>
                    </div>
                </div>
                <div className={styles.text_block}>
                    <h3>{product?.title}</h3>
                    <div className={styles.price}>{product?.price} грн.</div>
                    <div className={styles.color_block}>
                        <div className={cn(styles.color_el, styles.white)}/>
                        <div className={cn(styles.color_el, styles.grey)}/>
                        <div className={cn(styles.color_el, styles.beige)}/>
                    </div>
                    <div className={styles.color_text}>
                        Цвет: Кофе с молоком меланж
                    </div>
                    <div className={styles.select} onClick={()=>setOpenSelect(pre=>!pre)} >
                        {sizeProduct}
                        <span className={cn(styles.svg, {[styles.active_svg]:openSelect})}><AiOutlineRight/></span>
                        {openSelect && <ul>
                            {size.map(el=>(
                                <li key={el} onClick={()=>setSizeProduct(el)}>{el}</li>
                            ))}
                        </ul>}
                    </div>
                    <div className={styles.button_block}>
                        <button>В КОРЗИНУ</button>
                        <button><AiOutlineHeart/>В ИЗБРАННОЕ </button>
                    </div>
                    <div className={styles.description}>
                        <h4>Подробности</h4>
                        <Description title="Обмеры и описание">{product?.description}</Description>
                        <Description title="Состав и уход" >
                            <ul>
                                <li>Состав: 50% Шерсть, 50% Полиэстер</li>
                                <li>Подкладка: 100% Полиэстер</li>
                                <li>Утеплитель: 90% Пух, 10% Перо</li>
                            </ul>
                            <ul>
                                <li>- Не стирать</li>
                                <li>- Гладить при температуре утюга до 110°C</li>
                                <li>- Не отбеливать</li>
                                <li>- Барабанная сушка запрещена</li>
                                <li>- Сухая чистка (химчистка)</li>
                            </ul>
                        </Description>
                    </div>
                </div>
            </div>
            <OtherImage title="Весь образ" handleTransition={handleTransition} style={styleX} data={dataWhile} />
            <OtherImage title="Дополните образ" handleTransition={handleTransition} style={styleL} data={dataAdditional} />
            <OtherImage title="Вам может понравиться" handleTransition={handleTransition} style={styleL} data={dataLike} />
            <OtherImage title="Вы недавно смотрели" handleTransition={handleTransition} style={styleL} data={dataRecentlyWatched} />
        </div>
    );
};

export default ProductCard;