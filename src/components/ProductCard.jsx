import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import styles from './ProductCard.module.css';
const ProductCard = ({id,name,imageURL,price,quantity}) => {
    const {cart,addtocartApi} = useContext(ProductContext);
    const [applicable,setApplicale] = useState(false);
    const [qty,setQty] = useState(1);
    useEffect(()=>{
            for(let x of cart){
                if(x.id === id && x.qty>0){
                    setQty(x.qty);
                    setApplicale(true);
                    break;
                }
            } 
    },[])
    const handleaddtoCart=()=>{
        let obj = {
            id,
            name,
            imageURL,
            price,
            qty
        }
        cart.push(obj);
        addtocartApi(cart);
        setApplicale(true);
    }

    const handlechangeQty=(payload)=>{
        
       if(payload===1){
        if(qty>quantity){
            alert('out of stock');
            setQty(quantity);
            return
        }
       }else{
         if(qty<=1){
            let newcart = cart.filter((el)=> el.id !== id);
            addtocartApi(newcart);
            setApplicale(false);
            return;
         }
       }

        setQty((prev)=> prev + payload);

        let newcart = cart.filter((el)=> el.id !== id);
        let obj = {
            id,
            name,
            imageURL,
            price,
            qty
        }
        newcart.push(obj);
        addtocartApi(newcart);
    }

    return (
        <div className={styles.card}>
           <h3>{name}</h3>
           <img src={imageURL} alt="name" />
           <div className={styles.flxdiv}>
           <h3>{price}</h3> 
           {
            applicable?<div><button  onClick={()=>handlechangeQty(-1)}>-</button>{qty>=quantity?quantity:qty}<button  onClick={()=>handlechangeQty(1)}>+</button></div>: <button onClick={handleaddtoCart} className={styles.btn}>Add to cart</button>
           }
           </div>
        </div>
    );
};

export default ProductCard;