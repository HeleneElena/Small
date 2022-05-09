import React from 'react';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import Count from '../Count/Count';
import "./style.scss";

function CartProduct(props) {
    return (
        <section className="product">
                        <div className="product__img"><img src={`./img/products/${props.product.img}`} alt="Apple MacBook Air 13" /></div>
                        <div className="product__title">{props.product.title}</div>
                        <div className="product__count">
                            { /* <Count /> */ } 
                        </div>
                        <div className="product__price">{props.product.price} руб.</div>
                        <div className="product__controls">
                            <ButtonDelete deleteProduct={props.deleteProduct} id={props.id} />
                        </div>
        </section>
    );
}

export default CartProduct;