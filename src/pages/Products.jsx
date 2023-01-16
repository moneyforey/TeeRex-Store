import{ useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import { ProductContext } from '../context/ProductContext';
import styles from "./Products.module.css";

const Products = () => {
    const [tosearch,setToSearch] = useState();
    const {products,filterProducts,getdataApi,filterdataApi} = useContext(ProductContext);
    useEffect(()=>{
       getdataApi();
    },[]);
    
    const handleSearch=()=>{
          let newdata = products.filter((el)=> el.name === tosearch || el.type === tosearch || el.color === tosearch);
          filterdataApi(newdata);
    }

    const handleFilter=(req)=>{
        let newdata = products.filter((el)=> el.name === req || el.type === req || el.color === req || el.gender === req );
        filterdataApi(newdata); 
    }
    
    // console.log(filterProducts)
    return (
        <div className={styles.main}>
            <Sidebar handleFilter={handleFilter}/>
            <div>
                <input onChange={(e)=>setToSearch(e.target.value)} type="text" placeholder='search products here...' />
                <button onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                <button id={styles.flt_btn}><i class="fa-regular fa-filter"></i></button>
            <div className={styles.container}>
               {
                filterProducts?.map((el)=>(
                   <ProductCard key={el.id} {...el}/> 
                ))
               }
            </div>
            </div>
        </div>
    );
};
export default Products;