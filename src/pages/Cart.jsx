import React, { useContext } from 'react';
import CartCard from '../components/CartCard';
import { ProductContext } from '../context/ProductContext';

const Cart = () => {
    const {cart,cartTotal} = useContext(ProductContext);
     console.log(cart);
    return (
        <div>
            {
                cart.map((el)=>
                    <CartCard key={el.name} {...el}/>
                )
            }
            <div>
                {
                    cart.length>0 && <h2>Total Amount: Rs {cartTotal}</h2>
                }
            </div>
        </div>
    );
};

export default Cart;