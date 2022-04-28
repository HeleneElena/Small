import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Cart(props) {

    const navigate = useNavigate()

    function removeFromCart(index) {
        props.cart.splice(index, 1)
        navigate("/cart")
    }

    return (
        <>
            {
                props.cart.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>Titel</th>
                            <th>Jahr</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.cart.map((ele, index) => {
                                return (<tr>
                                    <td>{ele.title}</td>
                                    <td>{ele.year}</td>
                                    <td onClick={() => {removeFromCart(index)}}>Entfernen</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                :
                <div>Warenkorb leer.</div>
            }
            <Link to="/">Startseite</Link>
        </>
    );
}

export default Cart;