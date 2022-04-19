import React from 'react';
import "./Main.css";
import Table from './Table';

function Main(props) {
     

    return (
        <main>
            <h2 className='h1'>Bücher</h2>
            <Table />
            <h2 className='h1'>Audio-Books</h2>
            <Table />
        </main>
    );
}

export default Main;