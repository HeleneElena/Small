import React from 'react';
import TableRow from './TableRow';
import THead from './THead';
import "./Main.css";

function Table(props) {
    const books = [
        {
            'Autor': 'Stephen King',
            'Titel': 'Carrie',
            'Jahr': 1974,
            'Seiten': 199,
            'Verlag': 'Doubleday'
        },
        {
            'Autor': 'Stephen King',
            'Titel': 'The Shining',
            'Jahr': 1977,
            'Seiten': 447,
            'Verlag': 'Doubleday'
        },
        {
            'Autor': 'Stephen King',
            'Titel': 'Christine',
            'Jahr': 1983,
            'Seiten': 526,
            'Verlag': 'Viking'
        },
        {
            'Autor': 'Stephen King',
            'Titel': 'It',
            'Jahr': 1986,
            'Seiten': 1138,
            'Verlag': 'Viking'
        },
        {
            'Autor': 'Stephen King',
            'Titel': 'Misery',
            'Jahr': 1987,
            'Seiten': 310,
            'Verlag': 'Viking'
        },
        {
            'Autor': 'Stephen King',
            'Titel': 'Joyland',
            'Jahr': 2013,
            'Seiten': 288,
            'Verlag': 'Hard Case Crime'
        }
    ];

    return (
        <table className='table'>
            <THead />
            <TableRow books={props.books} />
        </table>
    );
}

export default Table;