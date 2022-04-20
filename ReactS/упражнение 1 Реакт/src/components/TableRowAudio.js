import React from 'react';

function TableRowAudio(props) {
    return (
        <tr className={props.i % 2 ? "odd" : undefined}>
           <td>{props.audioBook.Autor}</td> 
           <td>{props.audioBook.Titel}</td> 
           <td>{props.audioBook.Jahr}</td> 
           <td>{props.audioBook["Länge"]}</td> 
           <td>{props.audioBook.Verlag}</td> 
        </tr>
    );
}

export default TableRowAudio;