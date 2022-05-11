import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';

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
                                        <td>{ele.Titel}</td>
                                        <td>{ele.Preis} EUR</td>
                                        <td onClick={() => {props.removeFromCart(index)}}>Entfernen</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </>
                :
                <p>Der Warenkorb ist leer.</p>
            }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);