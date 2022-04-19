import React from 'react';
import "./Main.css";

function TableRow(props) {
   
    return (
        <tbody>
            <tr>
                <td className='td'>{props.Autor}</td>
                <td className='td odd'>{props.Titel}</td>
                <td className='td'>{props.Jahr}</td>
                <td className='td odd'>{props.Seitenl}</td>
                <td className='td'>{props.Verlag}</td>
            </tr>
        </tbody>
    );
}

export default TableRow;