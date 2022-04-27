import React from 'react'
import { Link } from 'react-router-dom'

function TableRow(props) {
    return (
        <tr>
            <td>{props.album.title}</td>
            <td><Link to={`/details/${props.album.title}/${props.album.year}`}>Details</Link></td>
        </tr>
    );
}

export default TableRow;