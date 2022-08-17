import React from "react";
import TableRow from "./TableRow";



function Table ({bookList}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Autor</th>
                    <th>Title</th>
                    <th>Jahr</th>
                    <th>Seiten</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookList.map((el, id) => {
                       return <TableRow key={id} book={el}  />
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;