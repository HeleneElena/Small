import React from 'react';
import Table from './Table';
import TableAudio from './TableAudio';
import TableBooks from './TableBooks';

function Main(props) {

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
    ]

    const audio = [
        {
            'Autor': 'Stephen King',
            'Titel': 'On Writing: A Memoir of the Craft ',
            'Jahr': 2000,
            'Länge': 120,
            'Verlag': 'Simon & Schuster Audio'
        },
        {
            'Autor': 'Stephen King',
            'Titel': 'Salem\'s Lot (introduction)',
            'Jahr': 2004,
            'Länge': 180,
            'Verlag': 'Simon & Schuster Audio'
        },
        {
            'Autor': 'Stephen King',
            'Titel': 'Bag of Bones',
            'Jahr': 2005,
            'Länge': 240,
            'Verlag': 'Simon & Schuster Audio'
        }
    ]

    return (
        <main>
            <h2>Bücher</h2>
            <Table list={books} />
            <h2>Audio-Books</h2>
            <Table list={audio} />
        </main>
    );
}

export default Main;