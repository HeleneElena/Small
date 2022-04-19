import React from 'react';
import './Main.css';

function THead(props) {
    return (
        <thead>
         <tr>
            <td className='th'>Autor</td>
            <td className='th'>Titel</td>
            <td className='th'>Jahr</td>
            <td className='th'>Seitenl</td>
            <td className='th'>Verlag</td>
         </tr>
      </thead>
    );
}

export default THead;