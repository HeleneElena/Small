import React from 'react';
import TableRowBooks from './TableRowBooks';

function TableBooks(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Autor</th>
                    <th>Titel</th>
                    <th>Jahr</th>
                    <th>Seiten</th>
                    <th>Verlag</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.bookList.map((value, index) => {
                        return <TableRowBooks book={value} i={index} />
                    })
                }
            </tbody>
        </table>
    );
}

export default TableBooks;