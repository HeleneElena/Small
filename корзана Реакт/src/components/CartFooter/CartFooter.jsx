import React from 'react';
import "./style.scss";

function CartFooter(props) {
    return (
        <footer className="cart-footer">
            <div className="cart-footer__count">3 единицы</div>
            <div className="cart-footer__price">329 000 руб.</div>
        </footer>
    );
}

export default CartFooter;