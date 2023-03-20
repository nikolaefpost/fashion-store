import React  from 'react';
import {useLanguage} from "../../context/setting";
import {AiOutlineRight} from "react-icons/ai"
import rootStore from "../../store/rootStore";

import styles from "./catalog.module.scss"
import {observer} from "mobx-react-lite";
import Sidebar from "./Sidebar";
import HeaderCatalog from "./HeaderCatalog";
import ProductList from "./ProductList";
import {useNavigate} from "react-router-dom";


const Catalog = () => {
    const {text} = useLanguage();
    const navigate = useNavigate();
    const {productStore} = rootStore;


    // const [currentCategory, setCurrentCategory] = useState('');
    //
    //
    //
    // useEffect(()=>{
    //     if (currentCategory === "") productStore.setList(productStore.product)
    // },[productStore.product, currentCategory])
    //
    // const filterCategory = (category) => {
    //     productStore.setList(productStore.product.filter(item=>item.category === category));
    //     setCurrentCategory(category)
    // }
    const handleHome = () => {
       navigate("/")
    }


    return (
        <div className={styles.content}>
            <div className={styles.nav_block}>
                <span onClick={handleHome}>Главная</span>
                <AiOutlineRight/>
                <span
                    onClick={()=>productStore.filterCategory("")}
                >Каталог</span>
                {productStore.currentCategory && <>
                    <AiOutlineRight/>
                    <span className={styles.nav_category}>{productStore.currentCategory}</span>
                </>}
            </div>
            <div className={styles.product_grid}>

                <div className={styles.title}>Каталог </div>
                <HeaderCatalog length={productStore.list.length}/>
                <ProductList products={productStore.list}/>
                <Sidebar category={productStore.category} sort={productStore.filterCategory}/>

            </div>
            {/*<ProductListMobx/>*/}
        </div>
    );
};

export default observer(Catalog);