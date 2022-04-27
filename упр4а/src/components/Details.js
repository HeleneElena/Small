import React from 'react';
import { Link, useParams } from 'react-router-dom'

function Details(props) {

    const params = useParams()

    function addToCart() {
        props.cart.push({
            "title": params.titel,
            "year": params.jahr
        })
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Jahr</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{params.titel}</td>
                        <td>{params.jahr}</td>
                        <td onClick={addToCart}>zum Warenkorb hinzufügen</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Startseite</Link><br />
            <Link to="/cart">Warenkorb</Link>
        </>
    );
}

export default Details;