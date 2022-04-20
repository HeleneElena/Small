import React from 'react';

function TableRowBooks(props) {
    return (
        <tr className={props.i % 2 ? "odd" : undefined}>
           <td>{props.book.Autor}</td> 
           <td>{props.book.Titel}</td> 
           <td>{props.book.Jahr}</td> 
           <td>{props.book.Seiten}</td> 
           <td>{props.book.Verlag}</td> 
        </tr>
    );
}

export default TableRowBooks;