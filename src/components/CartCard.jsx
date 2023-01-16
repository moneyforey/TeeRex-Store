import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import styles from './CartCard.module.css';

const CartCard = ({id,name,imageURL,price,qty}) => {
    const {cart,cartcount,cartTotal,addtocartApi} = useContext(ProductContext);
    const handleDelete=()=>{
         let newcart = cart.filter((el)=> el.id !== id);
         addtocartApi(newcart);
    }
    return (
        
            <div id={styles.main}>
                <img className={styles.img} src={imageURL} alt="name" />
                 <div>
                 <h3>{name}</h3>       
                 <h3>Rs{price}</h3> 
                 </div>
                 <select name="" id="">
                    <option value="">QTY{qty}</option>
                 </select>
              <button onClick={handleDelete}>DElETE</button>
            </div>
        
    );
};

export default CartCard;