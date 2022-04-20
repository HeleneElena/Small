import React from 'react';
import TableRowAudio from './TableRowAudio';

function TableAudio(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Autor</th>
                    <th>Titel</th>
                    <th>Jahr</th>
                    <th>Länge</th>
                    <th>Verlag</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.audioList.map((value, index) => {
                        return <TableRowAudio audioBook={value} i={index} />
                    })
                }
            </tbody>
        </table>
    );
}

export default TableAudio;