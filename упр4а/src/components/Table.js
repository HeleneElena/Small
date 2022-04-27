import React from 'react';
import TableRow from './TableRow'
import { Link } from 'react-router-dom'

function Table(props) {

    const albums = [
        {
            "title": "Wretch",
            "year": 1991
        },
        {
            "title": "Blues for the Red Sun",
            "year": 1992
        },
        {
            "title": "Welcome to Sky Valley",
            "year": 1994
        },
        {
            "title": "...And the Circus Leaves Town",
            "year": 1995
        }
    ]

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        albums.map((ele) => {
                            return <TableRow album={ele} />
                        })
                    }
                </tbody>
            </table>
            <Link to="/cart">Warenkorb</Link>
        </>
    );
}

export default Table;