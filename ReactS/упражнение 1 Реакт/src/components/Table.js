import React from 'react';
import TableRow from './TableRow';

function Table(props) {

    const keysArray = Object.keys(props.list[0])
    
    return (
        <table>
            <thead>
                <tr>
                    {
                        keysArray.map((key) => {
                            return <th>{key}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map((value, index) => {
                        return <TableRow product={value} i={index} />
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;