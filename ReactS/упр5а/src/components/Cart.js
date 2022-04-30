import React from 'react';

function Cart(props) {
    return (
        <>
            {
                props.warenkorb.length > 0 ? 
                <>
                    <h2>Warenkorb</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Titel</th>
                                <th>Preis</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.warenkorb.map((ele, index) => {
                                    return (<tr>
                                        <td>{ele.titel}</td>
                                        <td>{ele.preis} EUR</td>
                                        <td onClick={() => {props.entfernenVomWarenkorb(index)}}>Entfernen</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </> :
                <p>Der Warenkorb ist leer.</p>
            }     
        </>
    );
}

export default Cart;