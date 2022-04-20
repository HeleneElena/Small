import React from 'react';

function TableRow(props) {

    const valuesArray = Object.values(props.product)

    return (
        <tr className={props.i % 2 ? "odd" : undefined}>
            {
                valuesArray.map((value) => {
                    return <td>{value}</td>
                })
            }
        </tr>
    );
}

export default TableRow;