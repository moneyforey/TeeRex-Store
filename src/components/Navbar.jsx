import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import styles from"./Navbar.module.css"

const Navbar = () => {
    const {cartcount} = useContext(ProductContext);
    return (
        <div id={styles.nav}>
        <Link to='/'><h1>TeeRex Store</h1></Link>
        <div id={styles.nav_items}>
            <Link to='/' id={styles.pro_link}>Products</Link>
            <Link to='/cart'>
                <div>
                <i class="fa-solid fa-cart-shopping"></i>
                {
                    cartcount>0&&<span>{cartcount}</span>
                }
                </div>
            </Link>
        </div>
       </div>
    );
};

export default Navbar;