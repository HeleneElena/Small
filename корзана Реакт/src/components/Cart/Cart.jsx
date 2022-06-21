import React, { useState } from 'react';
import CartFooter from '../CartFooter/CartFooter';
import CartHeader from '../CartHeader/CartHeader';
import CartProduct from '../CartProduct/CartProduct';
import data from './../../data';

function Cart(props) {
    const [cart, setCart] = useState(data);

    const deleteProduct = (id) => {
        console.log("Delete!!!", id);
        setCart((cart) => {
            return cart.filter((product) => {return id !== product.id})
        });
    }
    
    const products = cart.map((product) => {
        return <CartProduct product={product} key={product.id} deleteProduct={deleteProduct} />
    });


    return (
        <section className="cart">
            <CartHeader />
            {products}
            <CartFooter />                  
        </section>
    );
}

export default Cart;