import React from 'react';
import { Link, useParams } from 'react-router-dom'

function Details(props) {

    const params = useParams()

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Jahr</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{params.titel}</td>
                        <td>{params.jahr}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">zur Startseite</Link>
        </>
    );
}

export default Details;