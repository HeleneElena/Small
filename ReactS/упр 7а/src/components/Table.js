import React from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'

function Table(props) {
    return (
        <>
            {/* SPIELE */}
            {
                props.formular.hauptkategorie === "0" && props.formular.unterkategorie === "0" &&
                <div>
                    <h2>Spiele</h2>
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
                                props.artikel[props.formular.hauptkategorie].gruppe[props.formular.unterkategorie].artikel.map((ele) => {
                                    return (<tr>
                                        <td>{ele.titel}</td>
                                        <td>{ele.preis} EUR</td>
                                        <td onClick={() => {props.addToCart(ele)}}>Hinzufügen</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }

            {/* BÜCHER */}
            {
                props.formular.hauptkategorie === "0" && props.formular.unterkategorie === "1" &&
                <div>
                    <h2>Bücher</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Autor</th>
                                <th>Titel</th>
                                <th>Preis</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.artikel[props.formular.hauptkategorie].gruppe[props.formular.unterkategorie].artikel.map((ele) => {
                                    return (<tr>
                                        <td>{ele.autor}</td>
                                        <td>{ele.titel}</td>
                                        <td>{ele.preis} EUR</td>
                                        <td onClick={() => {props.addToCart(ele)}}>Hinzufügen</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }

            {/* AUDIO-BOOKS */}
            {
                props.formular.hauptkategorie === "0" && props.formular.unterkategorie === "2" &&
                <div>
                    <h2>Audio-Books</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Autor</th>
                                <th>Titel</th>
                                <th>Preis</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.artikel[props.formular.hauptkategorie].gruppe[props.formular.unterkategorie].artikel.map((ele) => {
                                    return (<tr>
                                        <td>{ele.autor}</td>
                                        <td>{ele.titel}</td>
                                        <td>{ele.preis} EUR</td>
                                        <td onClick={() => {props.addToCart(ele)}}>Hinzufügen</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>    
                </div>
            }

            {/* SCHUHE */}
            {
                props.formular.hauptkategorie === "1" && props.formular.unterkategorie === "0" &&
                <div>
                    <h2>Schuhe</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Preis</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.artikel[props.formular.hauptkategorie].gruppe[props.formular.unterkategorie].artikel.map((ele) => {
                                    return (<tr>
                                        <td>{ele.titel}</td>
                                        <td>{ele.preis} EUR</td>
                                        <td onClick={() => {props.addToCart(ele)}}>Hinzufügen</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }

            {/* GERÄTE */}
            {
                props.formular.hauptkategorie === "1" && props.formular.unterkategorie === "1" &&
                <div>
                    <h2>Geräte</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Beschreibung</th>
                                <th>Preis</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.artikel[props.formular.hauptkategorie].gruppe[props.formular.unterkategorie].artikel.map((ele) => {
                                    return (<tr>
                                        <td>{ele.titel}</td>
                                        <td>{ele.beschreibung}</td>
                                        <td>{ele.preis} EUR</td>
                                        <td onClick={() => {props.addToCart(ele)}}>Hinzufügen</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Table);