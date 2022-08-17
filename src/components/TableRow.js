import React from "react";

function TableRow ({book}) {

    return (
        <tr >
            <td>{book.Autor}</td>
            <td>{book.Title}</td>
            <td>{book.Jahr}</td>
            <td>{book.Seiten}</td>
        </tr>
    );
}

export default TableRow;